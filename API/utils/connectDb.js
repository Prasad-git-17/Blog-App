import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();

 const connectDb=async()=>{

    try {
     await mongoose.connect(process.env.MONGO_URI)
     console.log('mongoBd connected Succsesfully');
     
    } catch (error) {
        console.error('mongoDb connection error',error)
    }


}
export default connectDb