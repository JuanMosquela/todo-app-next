import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("Databse is already Connected");
  }
  try {
    await mongoose.connect(process.env.MONGO_CNN!);
  } catch (error) {
    console.log(error);
  }
};
