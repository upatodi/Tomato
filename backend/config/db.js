import mongoose from "mongoose";

export const connectDB = async() => {
    (await mongoose.connect('mongodb+srv://unnatipatodi:unnati1962@cluster0.un7jjj5.mongodb.net/foodDel').then(()=>console.log("DB Connected")));
}

