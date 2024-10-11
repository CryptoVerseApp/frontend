"use client";
import Link from 'next/link'
import React, { useEffect } from 'react'
import './Navbar.scss'
import Logo from '../app/assets/LogoCryptoVerse.png'
import Image from 'next/image'
import { useWallet } from '../app/hooks/useWallet'; // Import your custom hook
import { useRouter } from 'next/navigation'; // Use router for programmatic navigation

const Navbar = ({setMenu}) => {
  //Import wallet connect hooks
  const { walletAddress, networkError, ensName, connectWallet } = useWallet(); // Use the custom hook
  // Initialize router
  const router = useRouter();

  // Automatically navigate to /signup if walletAddress is not null
  useEffect(() => {
    if (walletAddress) {
      setMenu(true)
    }
  }, [walletAddress, router]); // Watches for changes to walletAddress

  return (
    <div className='navbar'>
      <div className="navbar-name"><Image className='image' src={Logo} alt='Logo' /></div>
      <div className="navbar-left">
        <div className="navlinks">
          <Link href='/' className='text-blue-700'>Home</Link>
          <Link href='#courses'>Course</Link>
          <Link href='#library'>Library</Link>
          <Link href='/'>Wallet</Link>
        </div>
        <div className="navbar-btn">
          <button onClick={connectWallet}> {walletAddress ? `Connected: ${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}` : 'Connect Wallet'}</button>
          {networkError && <p className="error-message">{networkError}</p>}
        </div>
      </div>
    </div>
  )
}

export default Navbar
