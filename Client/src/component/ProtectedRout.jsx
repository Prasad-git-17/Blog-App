import React from 'react'
import  {Outlet,Navigate} from 'react-router-dom'
const ProtectedRout = () => {
  let logIn=localStorage.getItem('token')

  if(logIn){
    return <Outlet/>
  }else{
    return <Navigate to={'/logIn'}/>
  }
 
}

export default ProtectedRout
