import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
const apiUrl=import.meta.env.VITE_API_URL

const Dashboard = () => {
  const {id}=useParams()
  let userId=localStorage.getItem('userId')
  let token =localStorage.getItem('token')
  const navigate=useNavigate()


  const [Blog, setBlog] = useState([])
  const [user,setUser]=useState('')

  useEffect(() => {
    const userBlogPosts = async () => {
      try {
        const res = await axios.get(`${apiUrl}/blog/findPost/${userId}`,{

          headers :{
            Auth: token
          }
        })
       //console.log(res.data.allPostOfUser[0].user.userName);
        //console.log(res.data);
      
        setBlog(res.data.allPostOfUser)
        setUser(res.data.user.userName)

      } catch (error) {
        
        console.log('error happns to get user blog', error);

      }



    }

    userBlogPosts()



  }, [])
const handleDelete =async(id)=>{
  try {
    const deletePost=await axios.delete(`${apiUrl}/blog/deletePost/${id}`,
   )
   // console.log('blog post deleted succsefully');
    let updateReal = Blog.filter(data => data._id !== id)
        setBlog(updateReal)

    
  } catch (error) {
     console.log('error happns to get user blog', error);
  }
}


// const handleDelete =async(id)=>{
//   try {
//     const deletePost=await axios.delete(`http://localhost:5000/blog/deletePost/${id}`)
//     //console.log('blog post deleted succsefully');
//     let updateReal = Blog.filter(data => data._id !== id)
//         setBlog(updateReal)

    
//   } catch (error) {
//      console.log('error happns to get user blog', error);
//   }

// }

 

  return (
    <div className='h-[80vh]'>
      <div  className=' flex justify-center items-center '>
           <h1 className='text-2xl font-bold mt-3'>Welcome to Dashboard Page</h1>
         

    </div>
      <div>
        <div className='flex justify-between bg-orange-300 items-center mt-4 m-4'>
        <h1 className='sm:text-2xl text-xl font-bold text-center  ml-10'>
          Blogger <span className='text-orange-600'>"{user}"</span> </h1>
        
         <button className='block m-2 p-1 rounded-md text-white bg-orange-600 mr-12'onClick={()=>navigate(`/user/addPost/${id}`)}>add post</button>
        </div>
        
        <div className='flex justify-center items-center mt-2'>
          <table className='w-[95%]'>
            <thead>
              <tr className='border-1'>
                <th className='border-1'>index</th>
                <th className='border-1'>Title</th>
                <th className='border-1'>Category</th>
                <th className='border-1'>Update</th>
                <th className='border-1'>Delete</th>
              </tr>
            </thead>
            <tbody>
              {
                Blog?.map((data, index) => {
                  return <tr key={index} className='border-1 text-center'>
                    <td className='border-1'>{index + 1}</td>
                    <td className='border-1'>{data.title}</td>
                    <td className='border-1'>{data.catogery}</td>
                    
                    <td className='border-1 '>
                      <div className='flex justify-center items-center'>
                        <button className='block m-1 px-1 rounded-md text-white bg-green-400'onClick={()=>navigate(`/update/${data._id}`)}>Update</button>
                      </div>

                    </td>
                    <td className='border-1 '>
                      <div className='flex justify-center items-center'>
                        <button className='block m-1 px-1 rounded-md text-white bg-red-600'
                        onClick={()=>{handleDelete(data._id)}}
                        >Delete</button>
                      </div>

                    </td>

                  </tr>

                })
              }
            </tbody>
          </table>
        </div>
      </div>

    </div>
  )
}

export default Dashboard
