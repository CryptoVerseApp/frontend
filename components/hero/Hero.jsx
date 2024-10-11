import React from 'react'
import './Hero.scss'

const Hero = ({setMenu}) => {
  return (
    <div className='hero'>
        <div className="hero-container">
            <div className="hero-txt">
                <h3>Explore Curated Blockchain Secured & Decentralized Library</h3>
                <p>Curious about Web3 and the world of cryptocurrency? Crytoverse has everything you need to stay ahead in the decentralized revolution. 
            Explore curated, blockchain-secured courses that covers everything from the basics of crytocurrencies to advanced decentralized finance strategies. 
            </p>
            <button onClick={()=>setMenu(true)}>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Hero
