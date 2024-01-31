import mongoose from "mongoose"

const connectToDb = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_DB_URI}`);
        console.log("Mongo Db connected");
    } catch (error) {
        console.log("Mongo Db Connection Failed", error);
        process.exit(1);
    }
}

export default connectToDb;