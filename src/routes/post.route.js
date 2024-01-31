import { Router } from "express"
import {
    createPost,
    getPosts,
    getSinglePost,
    getPostByCategory,
    getPostByAuthor,
    editPost,
    deletePost
} from "../controllers/post.controller.js"
import { upload } from "../middlewares/multer.middleware.js"
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/").post(verifyJWT, upload.single("thumbnail"), createPost)
router.route("/").get(getPosts)
router.route("/:id").get(getSinglePost)
router.route("/:id").patch(verifyJWT, upload.single("thumbnail"), editPost)
router.route("/:id").delete(verifyJWT, deletePost)
router.route("/categories/:category").get(getPostByCategory);
router.route("/users/:id").get(getPostByAuthor);

export default router;