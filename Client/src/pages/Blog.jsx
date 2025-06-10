import { useEffect, useState } from 'react'
import React  from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const apiUrl=import.meta.env.VITE_API_URL
const Blog = () => {
 
   const navigate=useNavigate()
   const [Blogs,setBlogs]=useState([])
  
    useEffect(()=>{
  
      const fetchAllBlogs= async()=>{
        try {
          const blogData=await axios.get(`${apiUrl}/blog/totalPost`)
     
          setBlogs(blogData.data.totalBlogPost)   
        } catch (error) {
          console.log('error happns to fetch blog data',error);
          
        }
      }
  
  fetchAllBlogs()
  
    },[])
  
    
  
  return (
    <div className=''>
      <div>
        <h1 className='font-bold text-2xl text-center mt-4'>All <span className=' text-orange-600 text-2xl'>Blog</span> Posts</h1>
      </div>
    <div className='grid md:grid-cols-2 m-4 gap-4 lg:grid-cols-3 '>
          
           {Blogs.slice().reverse().map((post,index)=>{
            return <div 
            key={index}
            
            >
              <div className='border-1 flex flex-col  justify-center items-center '>
               <div className='flex justify-center flex-col m-2'>
               <img className='h-[80%] w-[110%] mt-2 object-cover rounded'
                src={post.image} alt='image of peace' />
                 <h1 className='font-semibold  text-[18px]'>{post.catogery}</h1>
                 <h1 className='mt-1 text-2xl font-bold' >{post.title}</h1>
                <div className='flex justify-between items-center'>
              <p className='text-xl font-semibold'>{post.user.userName}</p> 
              <button className=' block w-[80px] p-1 rounded-md text-white bg-orange-600' onClick={()=>navigate(`/view/${post._id}`)}>View</button>
             </div>
               </div>
            </div>
    
            </div>
           })
           }
           
          </div>
    </div>
  )
}

export default Blog
