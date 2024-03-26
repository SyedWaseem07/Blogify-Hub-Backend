import mongoose from "mongoose"

const connectToDb = async () => {
    try {
        const connectionInstance = await mongoose.connect(`mongodb+srv://syedwaseem:admin123@cluster0.1hftx.mongodb.net/BlogifyHub?retryWrites=true&w=majority&appName=Cluster0`);
        console.log("Mongo Db connected");
    } catch (error) {
        console.log("Mongo Db Connection Failed", error);
        process.exit(1);
    }
}

export default connectToDb;
