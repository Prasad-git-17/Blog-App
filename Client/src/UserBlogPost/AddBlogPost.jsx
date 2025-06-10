import React, {  useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
const apiUrl=import.meta.env.VITE_API_URL

const AddBlogPost = () => {
  const navigate = useNavigate()
  let userId=localStorage.getItem('userId')
  let token = localStorage.getItem('token')
  const { id } = useParams()
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [image, setImage] = useState('')
  const [catogery, seCatogery] = useState('')

  const handlePost = async (e) => {
    e.preventDefault()

    const BlogPostData = {

      title,
      content,
      image,
      catogery,
      user: id
    }
   // console.log(BlogPostData);


    try {
      const res = await axios.post(`${apiUrl}/blog/addPost`, BlogPostData,

        {
          headers: {
            Auth: token
          }
        })
     // console.log(res.data);


    } catch (error) {
      console.log(error);

    }
     navigate(`/user/dash/${userId}`)
  }







  const hndleLogOut = () => {
    console.log('logOut function works..')
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
    navigate('/')
  }
  //<button className='block m-2 p-1 rounded-md text-white bg-orange-600 'onClick={()=>hndleLogOut()}>logOut</button>
  return (
    <div className='flex justify-center items-center'>

      <div>
        <h1 className='text-center text-xl mt-4 font-bold'>Add your <span className=' text-orange-600 text-2xl'>Blog</span> Post</h1>
        <div className='flex justify-center items-center m-8 border '>
          <form onSubmit={handlePost} >
            <label className='m-2 text-xl font-bold'>Title</label>
            <input
              className='border block focus:outline-none m-auto  w-[95%]'
              type='text'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder='Enter Title here'
              required
            />
            <label className='m-2 text-xl font-bold'>Category</label>
            <input
              className='border block  focus:outline-none m-auto  w-[95%]'
              type='text'
              value={catogery}
              onChange={(e) => seCatogery(e.target.value)}
              placeholder='Enter Category here'
              required
            />
            <label className='m-2 text-xl focus:outline-none font-bold'>Image</label>
            <input
              className='border block   m-auto  w-[95%]'
              type='text'
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder='Enter Image url here.'
              required
            />
            <label className='m-2 text-xl font-bold' htmlFor='textArea'>Content</label>
       
             <textarea
              className='border block focus:outline-none m-auto w-[95%]'
              id='textArea'
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder='Enter your blog content'
              rows='15'
              cols='50'


            />

           <div className='flex justify-between'>
           <button className='block m-2 w-20 p-1 rounded-md text-white bg-orange-600' type='submit'>Post blog</button>
            <button className='block m-2 w-20 p-1 rounded-md text-white bg-orange-600'onClick={()=>navigate(`/user/dash/${userId}`)}>Cancel</button>
           </div >
            
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddBlogPost
