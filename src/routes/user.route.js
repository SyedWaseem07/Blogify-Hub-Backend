import { Router } from "express"
import {
    registerUser,
    loginUser,
    logoutUser,
    getUserProfile,
    changeAvatar,
    editUserProfile,
    getAllAuthors
} from "../controllers/user.controller.js"
import { upload } from "../middlewares/multer.middleware.js"
import { verifyJWT } from "../middlewares/auth.middleware.js"

const router = Router();

router.route("/").get(getAllAuthors);
router.route("/register").post(upload.single("avatar"), registerUser);
router.route("/login").post(loginUser);
router.route("/logout").post(verifyJWT, logoutUser);
router.route("/:id").get(getUserProfile);
router.route("/change-avatar").post(verifyJWT, upload.single("avatar"), changeAvatar);
router.route("/edit-profile").post(verifyJWT, editUserProfile);

export default router;