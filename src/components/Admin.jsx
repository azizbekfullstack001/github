import axios from 'axios'
import React, { useEffect } from 'react'
export default function Admin(props) {
useEffect(()=>{
  axios({
    url:"http://localhost:8081/posts",
    method:"get"
}).then((res)=>{
props.handleClick(res.data)   
})
},[])
  return (
    <div>
      <input type="text" placeholder='title' />
      <input type="text" placeholder='body' />
      <button>save</button>
      <h1>ComponentWillUnMount</h1>
    </div>
  )
}
