import Image from 'next/image'
import React from 'react'
import './HeroTemp.scss'
import TempImage from '../../app/assets/onchain.png';
import Google from '../../app/assets/google.png';
import PlayStore from '../../app/assets/playstore.png'

const HeroTemp = () => {
  return (
    <div className='herotemp'>
      <div className="herotemp-container">
        <div className="herotemp-image">
             <Image src={TempImage} alt='Image here' />
        </div>
        <div className="temp-text">
            <h2>On Chain Library for blockchain Education</h2>
            <p>The On-Chain Library that serve as a decentralized, accessible learning platform where beginners 
                and crypto enthusiasts can find educational resources on Web3, blockchain, and cryptocurrency.</p>
                <div className="mobile-apps">
                    <Image className='image' src={Google} alt='Image here' />
                    <Image className='image' src={PlayStore} alt='Image here' />
                </div>
        </div>
      </div>
    </div>
  )
}

export default HeroTemp
