import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // Connect to the MongoDB cluster
    const connectionInstance = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB connected: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.error("MONGODB connection FAILED:", error.message);
    process.exit(1); // Exit process on connection failure
  }
};

export default connectDB;
