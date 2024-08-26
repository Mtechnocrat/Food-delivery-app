import mongoose from "mongoose";

export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://mrgenixx:1234@cluster0.thkkz.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}