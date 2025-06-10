import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const apiUrl=import.meta.env.VITE_API_URL
const SignIn = () => {
    const navigate=useNavigate()
    const [userName,setUserName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const handleSingIn=async(e)=>{
        
        e.preventDefault()

        const singUpData={
            userName,
            email,
            password
        }
        try {
            const res=await axios.post(`${apiUrl}/user/addUser`,singUpData)
           // console.log(res.data);
            navigate('/logIn')
            setEmail('')
            setPassword('')
            setUserName('')
        } catch (error) {
            console.log(error);
            
        }
        

    } 

  return (
    <div>
      
    <div className='h-[75vh] flex justify-center items-center'>
       
      <div className=' h-70 w-64 border'>
                <h1 className=' font-bold text-2xl ml-2 '>Sign In </h1>
        <form className='flex flex-col ' onSubmit={handleSingIn}>
            <label className='block mt-2 ml-2'>Name</label>
            <input
            className='border-1 focus:outline-none mx-2 '
            type='text'
            value={userName}
            onChange={(e)=>setUserName(e.target.value)}
            required
            />
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
         <button type='submit' className='block m-2 w-20 p-1 rounded-md text-white bg-orange-600 '>Sign Up</button>
          <p className='block m-2 w-20 p-1 rounded-md  text-orange-600 cursor-pointer 'onClick={()=>navigate('/logIn')}>Login</p>
          </div>
          
        </form>

      </div>
    </div>
    </div>
  )
}

export default SignIn
