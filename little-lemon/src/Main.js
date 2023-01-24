import React from 'react'
import hero from "./images/restauranfood.jpg"
import  "./Main.css";

export default function Main() {
  return (
    <div className='banner'>
     <h1>Little-Lemon</h1>
     <h2>Chicago</h2>
     <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.<br/>
       <button>Reserve a table</button> 
     </p>
     
     <img src={hero} width="300" alt="logo" />
    </div>
  )
}
