import dotenv from "dotenv";
import { app } from "./app.js"
import connectToDb from "./db/index.js"

<<<<<<< HEAD

=======
>>>>>>> d39d95508e28bda24860efe8be6123ba3a612757
dotenv.config({
    path: "./env",
})

connectToDb()
.then(() => {
    app.on("Error", (error) => {
        console.log(error);
    })

    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server running at port ${process.env.PORT}`);
    })
})
.catch(error => console.log("Connection failed", error))
<<<<<<< HEAD


=======
>>>>>>> d39d95508e28bda24860efe8be6123ba3a612757
