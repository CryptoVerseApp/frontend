import Image from 'next/image'
import React from 'react'
import HeroImage from '../../app/assets/hero.png'
import './Hero.scss'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-container">
            <div className="hero-txt">
                <h3>Decentralized <br /> Learning Platform</h3>
                <p>find educational resources on Web3, blockchain, and crptocurrency.</p>
            </div>
            <div className="hero-image">
                <Image src={HeroImage} />
            </div>
        </div>
    </div>
  )
}

export default Hero
