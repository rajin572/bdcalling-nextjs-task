import mongoose from "mongoose";

let isConnected = false;

export async function connectDB() {
  if (isConnected) {
    console.log("Using existing database connection");
    return mongoose.connection;
  }

  const connectionString = process.env.MONGO_DB_CONNECTION_STRING;

  if (!connectionString) {
    throw new Error("Missing MongoDB connection string");
  }

  if (
    !connectionString.startsWith("mongodb://") &&
    !connectionString.startsWith("mongodb+srv://")
  ) {
    throw new Error(
      'Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"'
    );
  }

  try {
    await mongoose.connect(connectionString);
    isConnected = true;
    console.log("Connected to MongoDB");
    return mongoose.connection;
  } catch (e) {
    if (e instanceof Error) {
      console.error("Error connecting to MongoDB:", e.message);
      throw new Error(e.message);
    } else {
      console.error("An unexpected error occurred while connecting to MongoDB");
      throw new Error("An unexpected error occurred");
    }
  }
}
