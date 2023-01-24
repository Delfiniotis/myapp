import React from 'react'
import logo from "./images/Logo.svg"
import  "./Nav.css";

export default function Nav() {
  return (
    <nav className='navContainer'>
        <ul>
        <li><img src={logo} alt="logo" /></li>
           <li><a href='/'>Home</a></li>
           <li><a href='/'>About</a></li>
           <li><a href='/'>Menu</a></li>
           <li><a href='/'>Reservations</a></li>
           <li><a href='/'>Order Online</a></li>
           <li><a href='/'>Login</a></li>
        </ul>
    </nav>
  )
}
