import React from 'react'
import footerlogo from "./images/footerlogo.png"

export default function Footer() {
  return (
    <>
    <img src={footerlogo} width="50" alt="footer logo"/>
    <h3>Doormat Navigation</h3>
        <ul>
           <li><a href='/'>Home</a></li>
           <li><a href='/'>About</a></li>
           <li><a href='/'>Menu</a></li>
           <li><a href='/'>Reservations</a></li>
           <li><a href='/'>Order Online</a></li>
           <li><a href='/'>Login</a></li>
        </ul>
     
        <h3>Contact</h3>
         <ul>
           <li><a href='/'>Address</a></li>
           <li><a href='/'>Email</a></li>
           <li><a href='/'>Phone Number</a></li>
        </ul>
        <h3>Social Media Links</h3>
        <ul>
           <li><a href='/'>Instagram</a></li>
           <li><a href='/'>Facebook</a></li>
           <li><a href='/'>Twitter</a></li>
        </ul>
   
          </> 
  )
}
