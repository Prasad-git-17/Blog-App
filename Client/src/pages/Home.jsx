import React, { useEffect, useState } from 'react'
import Peace from '../assets/Peace.jpg'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Home = () => {
 
 const navigate=useNavigate()
 const [Blogs,setBlogs]=useState([])

  useEffect(()=>{

    const fetchAllBlogs= async()=>{
      try {
        const blogData=await axios.get("http://localhost:5000/blog/totalPost")
       // console.log(blogData.data);
        
   
      setBlogs(blogData.data.totalBlogPost)   
      } catch (error) {
        console.log('error happns to fetch blog data',error);
        
      }
    }

fetchAllBlogs()

  },[])

  
  return (
    <div>
      
      <div>
        <div className='flex justify-center items-center m-4'>
          <img className='w-[90%] h-[90%] sm:w-[800px] sm:h-[400px] object-cover rounded '
            src={Peace} alt='image of peace' />
        </div>
        <div>
          <h1 className='text-xl font-bold text-center'>All blogs</h1>
          <p className='text-center mx-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </div>
      <div>
        <h1 className='text-center font-bold text-2xl mt-4'>latest blogs</h1>
      </div>
      <div className='grid md:grid-cols-2 m-4 gap-4 lg:grid-cols-3 '>
      
       {Blogs.reverse().slice(0,6).map((post,index)=>{
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
              <button className=' block w-[80px] p-1 rounded-md text-white bg-orange-600'onClick={()=>navigate(`/view/${post._id}`)}>View</button>
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

export default Home
