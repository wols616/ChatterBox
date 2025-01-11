import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("Conected to MongoDB");
  } catch (error) {
    console.log("Error connecting to mongodb", error);
  }
};

export default connectDB;
