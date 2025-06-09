
import mongoose from "mongoose";
const blogPostSchema=new mongoose.Schema({
title:{type:String,required:true},
content:{type:String,required:true},
creatrdAt:{type:Date,default:Date.now},
image:{type:String,required:true},
catogery:{type:String,required:true},
user:{type:mongoose.Schema.Types.ObjectId ,
    ref:'User',
    required:true
}
})


export const BlogPost=mongoose.model('BlogPost',blogPostSchema)