import mongoose from "mongoose";
import asyncHandler from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { upload } from "../middlewares/multer.middleware.js";
import { User } from "../models/user.model.js";
import fs, { rmSync } from "fs";

const generateAccessAndRefreshToken = async (userId) => {
    try {
        const user = await User.findById(userId);
        const accessToken = user.generateAccessToken();
        const refreshToken = user.generateRefreshToken();
        user.refreshToken = refreshToken;
        user.save({ validateBeforeSave: false });
        return { accessToken, refreshToken };
    } catch (error) {
        throw new ApiError(500, "Error while generating access and refresh tokens");
    }
};

// register user
// unprotected
// POST :- api/v1/users/register
const registerUser = asyncHandler(async (req, res, next) => {
    const { name, email, password, confirmPassword } = req.body;

    if (
        [name, email, password, confirmPassword].some(
            (field) => field.trim() === ""
        )
    )
        throw new ApiError(400, "Name, email, password required");

    const existingUser = await User.findOne({
        $or: [{ name }, { email }],
    });

    if (password?.trim().length < 6)
        throw new ApiError(400, "Password must be atleast 6 characters");
    if (password !== confirmPassword)
        throw new ApiError(400, "Password and Confirm password must be same");

    if (existingUser)
        throw new ApiError(409, "User with same credentails already exists");

    const avatarLocalPath = req.file?.path;

    let avatar;
    if (avatarLocalPath) avatar = await uploadOnCloudinary(avatarLocalPath);
    const user = await User.create({
        name,
        email,
        password,
        avatar: avatar?.url || "",
    });

    const registeredUser = await User.findById(user._id).select(
        "-password -refreshToken"
    );

    if (!registeredUser)
        throw new ApiError(500, "Something went wrong while registering user");

    return res
        .status(200)
        .json(new ApiResponse(200, registeredUser, "User Registered successfully"));
});

// login user
// unprotected
// POST :- api/v1/users/login
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (!email) throw new ApiError(400, "Email required for login");
    if (password.length === 0)
        throw new ApiError(400, "Password required for login");

    const user = await User.findOne({ email });

    if (!user) throw new ApiError(400, "User is not registered");

    const isPasswordCorrect = await user.isPasswordCorrect(password);

    if (!isPasswordCorrect) throw new ApiError(400, "Incorrect Password");

    const { accessToken, refreshToken } = await generateAccessAndRefreshToken(
        user._id
    );

    const loggedInUser = await User.findById(user._id).select("-password");

    const options = {
        httpOnly: true,
        secure: true,
    };

    return res
        .status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json(new ApiResponse(200, loggedInUser, "User logged in successfully"));
});

// logout user
// protected
// POST :- api/v1/users/logout
const logoutUser = asyncHandler(async (req, res) => {
    await User.findByIdAndUpdate(
        req.user?._id,
        {
            $unset: { refreshToken: 1 },
        },
        { new: true }
    );

    const options = {
        httpOnly: true,
        secure: true,
    };
    return res
        .status(200)
        .clearCookie("accessToken", options)
        .clearCookie("refreshToken", options)
        .json(new ApiResponse(200, {}, "User logged out successfully"));
});

// get user profile
// protected
// GET :- api/v1/users/:id
const getUserProfile = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const user = await User.findById(id).select("-password -refreshToken");

    if (!user) throw new ApiError(400, "User not found");

    return res
        .status(200)
        .json(new ApiResponse(200, user, "User profile fetched successfully"));
});

// change avatar
// protected
// POST :- api/v1/users/change-avatar
const changeAvatar = asyncHandler(async (req, res) => {
    const avatarLocalPath = req.file?.path;

    const avatar = await uploadOnCloudinary(avatarLocalPath);

    if (!avatar) throw new ApiError(400, "Avatar required");

    const user = await User.findByIdAndUpdate(
        req.user?._id,
        {
            $set: { avatar: avatar.url },
        },
        { new: true }
    ).select("-password -refreshToken");

    return res
        .status(200)
        .json(new ApiResponse(200, user, "Avatar changed successfully"));
});

// edit profile
// protected
// POST :- api/v1/users/edit-profile
const editUserProfile = asyncHandler(async (req, res) => {
    const { name, email, currentPassword, newPassword, confirmNewPassword } =
        req.body;
    if (
        !name ||
        !email ||
        !currentPassword ||
        !newPassword ||
        !confirmNewPassword
    )
        throw new ApiError(400, "All details required");

    if (newPassword !== confirmNewPassword)
        throw new ApiError(
            400,
            "New password and confirm new password must be same"
        );

    const emailExists = await User.findOne({ email });
    if (emailExists && emailExists._id === req.user?._id)
        throw new ApiError(400, "Email already exists");

    const nameExists = await User.findOne({ name });
    if (nameExists && nameExists._id !== req.user?._id)
        throw new ApiError(400, "Name already exists");

    const user = await User.findById(req.user?._id);

    const isPasswordCorrect = await user.isPasswordCorrect(currentPassword);
    if (!isPasswordCorrect)
        throw new ApiError(400, "Current Password is incorrect");

    user.name = name;
    user.email = email;
    user.password = newPassword;

    await user.save();

    const updatedUser = await User.findById(user._id).select("-password");

    return res
        .status(200)
        .json(
            new ApiResponse(200, updatedUser, "User Profile Updated Successfully")
        );
});

// get authors
// unprotected
// GET :- api/v1/users/authors and api/v1/users/
const getAllAuthors = asyncHandler(async (req, res) => {
    const authors = await User.find().select("-password -refreshToken");
    return res
        .status(200)
        .json(new ApiResponse(200, authors, "Authors fetched successfully"));
});

export {
    registerUser,
    loginUser,
    logoutUser,
    getUserProfile,
    changeAvatar,
    editUserProfile,
    getAllAuthors,
};
