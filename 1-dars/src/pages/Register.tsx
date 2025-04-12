import React from 'react'
import {useNavigate,Link} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import axios from 'axios'
export default function Register() {
  const navigate = useNavigate()
  const {register,handleSubmit,reset} = useForm()
  function mySubmit(data){
    if(data.password == data.repeatPassword){
     delete data.repeatPassword
      axios({
        url:"http://localhost:8081/users",
        method:"POST",
        data:data
      }).then((res)=>{
        navigate('/login')
      })

    }else{
      alert("Pasword va repeat password bir xil emas")
    }
    console.log(data);
    

  }
  return (
    <div className="container mt-5">
       <form onSubmit={handleSubmit(mySubmit)} className="p-4 max-w-md mx-auto border rounded-lg shadow-lg">
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email address</label>
        <input
          type="email"
          className="form-control"
          id="email"
          {...register("email")}
        
          aria-describedby="emailHelp"
        />
        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">PhoneNumber</label>
        <input
          type="password"
          className="form-control"
          id="password"
          {...register("phoneNumber")}
         
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Firstname</label>
        <input
          type="password"
          className="form-control"
          id="password"
          {...register("firstname")}
         
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          {...register("password")}
         
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Repeat Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          {...register("repeatPassword")}
         
        />
      </div>
      <Link to="/login" className="btn btn-link">Login</Link>
     
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    </div>
  )
}
