import mongoose from "mongoose";



const userSheama= new mongoose.Schema({

userName:{type:String,required:true},
email:{type:String,required:true},
password:{type:String,required:true},
})

export const User=mongoose.model('User',userSheama)