import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export default function Login() {
  const navigate = useNavigate()
  const [email,setEmail] = React.useState("")
  const [password,setPassword] = React.useState("")
  function handleLogin(){
    axios({
      url:"http://localhost:8081/users?email="+email,
      method:"GET",
    }).then((res)=>{
     
      let a =res.data[0]
     if(a.email==email && a.password==password){
      console.log(a.id);
      localStorage.setItem("token",a.id)
        navigate('/profile')
     }
      
    }).catch((err)=>{
      alert("login bo'lmadi")
    })
   
  }
  return (
    <div>
     <input onChange={(e)=>setEmail(e.target.value)}  type="text" placeholder='email kirit' />
     <input  onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='password kirit' />
     <button onClick={handleLogin}>login</button>
    </div>
  )
}
