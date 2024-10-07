import Link from 'next/link'
import React from 'react'
import './Navbar.scss'
import Logo from '../app/assets/LogoCryptoVerse.png'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar-name"><Image className='image' src={Logo} alt='Logo' /></div>
      <div className="navbar-left">
      <div className="navlinks">
        <Link href='#' className='text-blue-700'>Home</Link>
        <Link href='#courses'>Course</Link>
        <Link href='#library'>Library</Link>
        <Link href='/'>Wallet</Link>
      </div>
      <div className="navbar-btn">
        <Link href='/signup'><button>Connect Wallet</button></Link>
      </div>
      </div>
    </div>
  )
}

export default Navbar
