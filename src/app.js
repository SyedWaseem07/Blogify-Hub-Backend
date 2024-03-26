import express  from "express";
import cors from "cors"
import cookieParser from "cookie-parser"
import userRoutes from "./routes/user.route.js"
import postRoutes from "./routes/post.route.js"
import swaggerUi from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";
import postmanToOpenApi from "postman-to-openapi";

import { openapi } from "../openapi.js" 

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({ extended:true, limit: "16kb" }))

app.use(express.static("public/temp"))

app.use(cookieParser())

app.use("/api/v1/users", userRoutes)
app.use("/api/v1/posts", postRoutes)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openapi));
app.get('/swagger-json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerJson);
});
app.get('/generate-yml', async (req, res) => {
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // Postman Collection Path
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    const postmanCollection = 'collection.json'
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // Output OpenAPI Path
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    const outputFile = 'collection.yml'
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // Async/await
    ////++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    try {
        const result = await postmanToOpenApi(postmanCollection, outputFile, {
            defaultTag: 'General'
        })
        //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        // Without save the result in a file
        //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        const result2 = await postmanToOpenApi(postmanCollection, null, {
            defaultTag: 'General'
        })
        console.log(`OpenAPI specs: ${result}`)
    } catch (err) {
        console.log(err)
    }
});
app.get('/' , (req,res)=>{ 
    res.send("Welcome to backend of BlogifyHub(A blogging app) developed by --Syed Waseem");  
 }) 
// app.use(pageNotFound)
// app.use(errorMiddleware)

export { app }
