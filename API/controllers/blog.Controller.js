import { BlogPost } from "../models/blog.model.js"

export const addBlogPost=async(req,res)=>{
    const {title,content,user,image,catogery}=req.body
    try {
        const addPost=await BlogPost.create({title,content,user,image,catogery})
        res.json({message:'new blog post added',addPost})
    } catch (error) {
        console.log('error happans to uplode blog post ',error);
        
    }
}

export const findPostByUserId=async(req,res)=>{
         const id=req.params.id
         
    try {
        const allPostOfUser= await BlogPost.find({user:id}).populate('user','userName')
        
      
        res.json({message:'blog post of perticuler blogger found',allPostOfUser,user:req.user})
    } catch (error) {
        console.log('error happans to fetch blog post gg of user',error);
    }

}

export const fetchAllBlogPost = async(req,res)=>{

    try {
        const totalBlogPost=await BlogPost.find().populate('user','userName')
        res.json({message:'total blog post for home page',totalBlogPost})
    } catch (error) {
        console.log('error happans to fetch total blog post of user',error)
    }

}
export const DeleteBlogById =async(req,res)=>{
    const id=req.params.id
    try {
        const deletBlog= await BlogPost.findByIdAndDelete(id)
        if(!deletBlog){
            return res.json({message:'this post not exist'})
        }
        res.json({message:'blog post deleted succsefuly'})
    } catch (error) {
        console.log('error happans to delete blog post',error)
    }
}



export const getPostById= async(req,res)=>{
    const id=req.params.id
    try {
      const blogPostById= await BlogPost.findById(id).populate('user','userName')  
      if(!blogPostById){
        return res.json({message:'blog post not found'})
      }
      return res.json({message:'blog post found',blogPostById})
    } catch (error) {
        console.log('error happans to get blog post',error)
    }
}


export const updateBlogById= async(req,res)=>{
   const id =req.params.id

    const updatedPost=req.body

    try {
        const updatedPost=await BlogPost.findByIdAndUpdate(id,req.body,{new:true})
         return res.json({ message: 'blog updated succsesfully', updatedPost })
    } catch (error) {
         console.log('error happans to get blog post',error)
    }

}
