import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/index.js";
import mongoose from "mongoose";


const PORT = process.env.PORT || 8000;

// Middleware to parse JSON


// Connect to MongoDB and start the server
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`⚙️ Server is running on port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to start server due to MongoDB connection error:", err.message);
  });
