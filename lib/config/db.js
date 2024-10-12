import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect("mongodb+srv://EduDesk:FJHr4d55kME4peQI@edudesk.e8gom1o.mongodb.net/web");
    console.log("DB Connected");
}