import asyncHandler from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { Post } from "../models/post.model.js";
import { User } from "../models/user.model.js";
import fs from "fs";

// POST :- api/v1/posts/
// PROTECTED
const createPost = asyncHandler(async (req, res) => {
    const { title, category, description } = req.body;

    if (!title || !category || !description || !req.file)
        throw new ApiError(400, "All fields are required");

    const thumbnail = await uploadOnCloudinary(req.file?.path);

    if (!thumbnail) throw new ApiError(400, "Thumbnail is required");

    const user = await User.findByIdAndUpdate(
        req.user?._id,
        {
            $set: {
                posts: req.user.posts + 1,
            },
        },
        { new: true }
    ).select("-password -refreshToken");

    const post = await Post.create({
        title,
        category,
        description,
        thumbnail: thumbnail.url,
        creator: user,
    });

    if (!post) throw new ApiError(500, "Error occurred while creating post");

    return res
        .status(200)
        .json(new ApiResponse(201, post, "Post created successfully"));
});

// GET :- api/v1/posts/
// UNPROTECTED
const getPosts = asyncHandler(async (req, res) => {
    const posts = await Post.find();

    return res
        .status(200)
        .json(new ApiResponse(200, posts, "All post fetched successfully"));
});

// GET :- api/v1/posts/:id
// UNPROTECTED
const getSinglePost = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const post = await Post.findById(id);
    if (!post) throw new ApiError(400, "Post not found");

    return res
        .status(200)
        .json(new ApiResponse(200, post, "Post Fetched successfully"));
});

// GET :- api/v1/posts/:category
// UNPROTECTED
const getPostByCategory = asyncHandler(async (req, res) => {
    const { category } = req.params;

    const posts = await Post.find({ category }).sort({ createdAt: -1 });

    if (!posts) throw new ApiError(400, "Post of this category not found");

    return res
        .status(200)
        .json(new ApiResponse(200, posts, "Post Fetched successfully"));
});

// GET :- api/v1/posts/users/:id
// UNPROTECTED
const getPostByAuthor = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const posts = await Post.find({ creator: id }).sort({ createdAt: -1 });

    if (!posts) throw new ApiError(400, "Invalid author id");

    return res
        .status(200)
        .json(
            new ApiResponse(200, posts, "Post by this author fetched successfully")
        );
});

// PATCH :- api/v1/posts/:id
// PROTECTED
const editPost = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { title, category, description } = req.body;
    if (!title || !category || description.length < 12)
        throw new ApiError(400, "All feilds are required");

    const thumbnail = await uploadOnCloudinary(req.file?.path);

    const post = await Post.findByIdAndUpdate(
        id,
        {
            $set: {
                title,
                category,
                description,
                thumbnail: thumbnail?.url,
            },
        },
        { new: true }
    );
    if (!post) throw new ApiError(500, "Error while updating changes");

    return res
        .status(200)
        .json(new ApiResponse(200, post, "Post edited successfully"));
});

// DELETE :- api/v1/posts/:id
// PROTECTED
const deletePost = asyncHandler(async (req, res) => {
    const { id } = req.params;

    await Post.findByIdAndDelete(id);

    const user = await User.findByIdAndUpdate(
        req.user?._id,
        {
            $set: {
                posts: req.user.posts - 1,
            },
        },
        { new: true }
    ).select("-password -refreshToken");

    return res
        .status(200)
        .json(new ApiResponse(200, user, "Post Deleted Successfully"));
});

export {
    createPost,
    getPosts,
    getSinglePost,
    getPostByCategory,
    getPostByAuthor,
    editPost,
    deletePost,
};
