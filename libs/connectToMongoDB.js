import mongoose from "mongoose";
import "dotenv/config";

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Successfully connected to DB");
  } catch (error) {
    console.log(error);
  }
};

export default connectToMongoDB;
