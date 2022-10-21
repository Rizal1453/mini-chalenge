import React from 'react'
import {dummy} from './dummy'
import 'bootstrap/dist/css/bootstrap.min.css';

const utama = () => {
  return (
      <div>
      <div>
        <h1>Instagram</h1>
        {dummy.map((item, index) => ( 
        <div className='w-full d-flex'>
        <img src={item.image} className=" w-25 rounded-5 mb-3" alt=""/>
        <h1>{item.username}</h1>
        <h2>{item.follower}</h2>
      
        </div>
           
        ))}
        
    </div>
    </div>
  )
}

export default utama