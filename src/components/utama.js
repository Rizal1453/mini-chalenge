import React from 'react'
import {dummy} from './dummy'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const utama = () => {
    const navigate = useNavigate()
    return dummy?.map((item) => {
  return (
      <div>
      <div>
        <h1>Instagram</h1>
        
        <div key={item.id} className='w-full d-flex' onClick={() => navigate(`/profile/${item.id}`)}>
        <img src={item.image} className=" w-25 rounded-5 mb-3" alt=""/>
        <h1>{item.username}</h1>
        <h2>{item.follower}</h2>
      
        </div>
           
        
    </div>
    </div>
  )}
    )
}

export default utama