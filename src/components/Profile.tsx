import React from 'react'
import axios from 'axios';
export default function Profile(props) {
  console.log(props.handleClick);
  function handleDelete(id){
    axios({
      url:"http://localhost:8081/posts/"+id,
      method:"delete"
  }).then((res)=>{
window.location.reload()
  })
  }
  return (
    <div>
      {
        props.handleClick.map((item,index)=>{
          return <h1>{item.title}
          <button onClick={()=>handleDelete(item.id)}>x</button>
          </h1>
        })
      }
    </div>
  )
}
