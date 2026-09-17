import dns from "node:dns";

dns.setServers(["8.8.8.8", "8.8.4.4"]);

import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("Error:", error);
      throw error;
    });

    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running on port ${process.env.PORT || 8000}`);
    });
  })
  .catch((error) => {
    console.log("MongoDB connection failed:", error);
  });

/*import express from "express"
const app = express()

(async() => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}`)/$
        {DB_NAME}
        app.on("error", (error) => {
            console.log("ERROR:",error);
            throw error
        })
        ap
    });
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running:${process.env.PORT}`);
    });p.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        })
    } catch(error){
        console.log("ERROR:",error);
        throw error
    }
})()*/
