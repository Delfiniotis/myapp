import React from 'react'
import './Testimonials.css'
import face1 from "./images/face1.jpg"
import face2 from "./images/face2.jpg"
import face3 from "./images/face3.jpg"
import face4 from "./images/face4.jpg"


export default function Testimonials() {
  return (
    <> 
    <div className='background'>  
    <h1 id='heading'>Testimonials</h1>
    <div className='testimonials'>
       

        <div className='testCard'>
        <h3>Rating</h3>
        <img src={face1} width="100" alt="image" />
        <h3>Name</h3>
        </div>
        <div className='testCard'>
        <h3>Rating</h3>
        <img src={face2} width="100" alt="image" />
        <h3>Name</h3>
        </div>
        <div className='testCard'>
        <h3>Rating</h3>
        <img src={face3} width="100" alt="image" />
        <h3>Name</h3>
        </div>
        <div className='testCard'>
        <h3>Rating</h3>
        <img src={face4} width="100" alt="image" />
        <h3>Name</h3>
        </div>
 
    
        </div>
    </div>
    </>
  )
}
