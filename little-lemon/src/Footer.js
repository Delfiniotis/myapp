import React from 'react'
import footerlogo from "./images/footerlogo-extra.png"
import './Footer.css'

export default function Footer() {
  return (
    <>
    <div className='footercontainer'> 
    <div> 
    <img id='footer-logo' src={footerlogo} width="150" alt="footer logo"/>
    </div>
    <div className='ulstyle'> 
    <h1 className='section-name'>Doormat Navigation</h1>
        <ul>
           <li><a href='/'>Home</a></li>
           <li><a href='/'>About</a></li>
           <li><a href='/'>Menu</a></li>
           <li><a href='/'>Reservations</a></li>
           <li><a href='/'>Order Online</a></li>
           <li><a href='/'>Login</a></li>
        </ul>
     </div>
     <div className='ulstyle'> 
        <h1 className='section-name'>Contact</h1>
         <ul>
           <li><a href='/'>Address</a></li>
           <li><a href='/'>Email</a></li>
           <li><a href='/'>Phone Number</a></li>
        </ul>
      </div>
      <div className='ulstyle'> 
        <h1 className='section-name'>Social Media Links</h1>
        <ul>
           <li><a href='/'>Instagram</a></li>
           <li><a href='/'>Facebook</a></li>
           <li><a href='/'>Twitter</a></li>
        </ul>
        </div>
      </div>
          </> 
  )
}
