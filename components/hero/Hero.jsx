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
                <p>Curious about Web3 and the world of cryptocurrency? Crytoverse has everything you need to stay ahead in the decentralized revolution. 
Explore curated, blockchain-secured courses that covers everything from the basics of crytocurrencies to advanced decentralized finance strategies. 
</p>
            </div>
            <div className="hero-image">
                <Image src={HeroImage} alt='Image here' />
            </div>
        </div>
    </div>
  )
}

export default Hero
