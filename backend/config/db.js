import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://Nafisasaifee:nafisa822002@cluster0.vrrkvgw.mongodb.net/food-del"
    )
    .then(() => console.log("DB Connected"));
};
