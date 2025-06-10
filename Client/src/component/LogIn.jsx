import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const apiUrl=import.meta.env.VITE_API_URL
const LogIn = () => {
    const navigate=useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')



    const handlelogIn =async(e)=>{
        e.preventDefault()
    // console.log('hi halo login');


     const logInData={
        email,
        password
     }

     try {
        const res=await axios.post(`${apiUrl}/user/login`,
       logInData)
         localStorage.setItem("token",res.data.token)
         localStorage.setItem("userId",res.data.user._id)
     
         let Id=res.data.user._id
 
          navigate(`/user/dash/${Id}`)
       
     } catch (error) {
        console.log('error happens to login data..');
        
     }
     
    }
    return (
      <div>
        
        <div className='h-[70vh] flex justify-center items-center'>
        <div className=' h-60 w-64 border'>
          <h1 className=' font-bold text-2xl ml-2 '>Log In </h1>
        <form className='flex flex-col ' onSubmit={handlelogIn}>
           
             <label className='block mt-2 ml-2'>Email</label>
          <input 
           className='border-1 focus:outline-none mx-2'
          type='text'
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          required
          />
          <label className='block mt-2 ml-2'>PassWord</label>
          <input 
          type='text'
          className='border-1 focus:outline-none mx-2'
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          required
          />
          <div className='flex justify-between mt-3'>
          
          <button className='block m-2 w-20 p-1 rounded-md text-white bg-orange-600'type='submit'>Log In</button>
           <p className='block m-2 w-20 p-1 rounded-md text-orange-600 cursor-pointer' onClick={()=>navigate('/signIn')}>Register</p>
          </div>
          
        </form>
        </div>
        </div>
        </div>
    )
}

export default LogIn
