import dns from "node:dns";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

dns.setServers(["8.8.8.8", "8.8.4.4"]);

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(process.env.MONGODB_URI);

    console.log(
      `\nMongoDB connected !! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MONGODB connection error:", error.message);
    process.exit(1);
  }
};

export default connectDB;
