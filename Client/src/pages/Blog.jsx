import { useEffect, useState } from 'react'
import React  from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const apiUrl=import.meta.env.VITE_API_URL
const Blog = () => {
 
   const navigate=useNavigate()
   const [Blogs,setBlogs]=useState([])
   const [pageNo, setPageNo] = useState(1)
  const itemPerPage = 4
  const totalPages = Math.ceil(Blogs.length / itemPerPage)
  const initialIndex = pageNo * itemPerPage - itemPerPage
  const lastIndex = pageNo* itemPerPage
  
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
  
    const handlePage = (a) => {
     setPageNo(a)

  }

const handleNext =()=>{
  setPageNo(pageNo+1)
}

const handlePrevious = ()=>{
  setPageNo(pageNo-1)
}
  
  return (
    <div className=''>
      <div>
        <h1 className='font-bold text-2xl text-center mt-4'>All <span className=' text-orange-600 text-2xl'>Blog</span> Posts</h1>
      </div>
    <div className='grid md:grid-cols-2 m-4 gap-4 lg:grid-cols-2 '>
          
           {Blogs.slice(initialIndex, lastIndex).map((post,index)=>{
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
           <div className='flex justify-center mt-12 m-4'>
        <button className={`${pageNo==1 ?  'hidden' : 'block'} pl-2 pr-2 m-1 border font-semibold  rounded`}
        onClick={()=>{handlePrevious()}}
        >Previous</button>
        {
          Array.from({ length: totalPages }, (_, index) => {
            return <button
              className={`${pageNo === index + 1 ? 'bg-orange-400' : ''} m-1 pl-2 pr-2 font-semibold border rounded`}
              key={index}
             
              onClick={()=>{handlePage(index + 1)}}
            >{index+1}</button>
          })

        }
        <button 
        onClick={()=>{handleNext()}}
        className={`${pageNo==totalPages ? 'hidden' : 'block'} pl-2 pr-2 m-1  font-semibold border rounded`}>Next</button>
      </div>
    </div>
  )
}

export default Blog
