import {Routes,Route,useNavigate, useLocation} from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import Profile from './pages/Profile'
import PageNotFount from './pages/PageNotFount'
import Home from './pages/Home'
import { useEffect } from 'react'
export default function App() {
  const blockPage = ['/admin',"/profile","/mentor"]
  const navigate = useNavigate()
 let location = useLocation()
useEffect(()=>{
  if(blockPage.includes(location.pathname)){
    let token = localStorage.getItem('token')
    if(token !=null){
  
    }else{
      navigate('/404')
    }
  }
},[location.pathname])
 

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/404" element={<PageNotFount/>} />
      </Routes>
 
    </div>
  )
}
