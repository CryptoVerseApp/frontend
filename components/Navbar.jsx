import Link from 'next/link'
import React from 'react'
import './Navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar-name"><h2>CryptoVerse</h2></div>
      <div className="navbar-left">
      <div className="navlinks">
        <Link href='/' className='text-blue-700'>Home</Link>
        <Link href='/'>Courses</Link>
        <Link href='/'>Library</Link>
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
