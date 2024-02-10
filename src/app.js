import express  from "express";
import cors from "cors"
import cookieParser from "cookie-parser"
import userRoutes from "./routes/user.route.js"
import postRoutes from "./routes/post.route.js"
<<<<<<< HEAD
import path from "path";
const __dirname = path.resolve();
=======

>>>>>>> d39d95508e28bda24860efe8be6123ba3a612757
const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({ extended:true, limit: "16kb" }))

<<<<<<< HEAD
app.use(express.static(path.join(__dirname, '/client/dist')))


=======
>>>>>>> d39d95508e28bda24860efe8be6123ba3a612757
app.use(cookieParser())


app.use("/api/v1/users", userRoutes)
app.use("/api/v1/posts", postRoutes)

<<<<<<< HEAD
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "dist", "index.html"))
})

=======
>>>>>>> d39d95508e28bda24860efe8be6123ba3a612757
// app.use(pageNotFound)
// app.use(errorMiddleware)

export { app }