import React from 'react'
import OnchainMoji from '../../app/assets/onchainmoji.png'
import Curated from '../../app/assets/gov.png'
import UserC from '../../app/assets/userc.png'
import NFT from '../../app/assets/nft.png'
import Gov from '../../app/assets/curated.png'
import Image from 'next/image'
import './HeroFeatures.scss'

const HeroFeatures = () => {
  return (
    <div className='herofeatures'>
        <h2>Key Features</h2>
      <div className="features-container">
        <div className="features-temp">
          <div className="feature-moji">
            <Image src={OnchainMoji} />
          </div>
          <h2>On-Chain Content Storage</h2>
          <p>All educational materials (e.g.videos, articles) are stored on-chain, ensuring transparency, immutability, and accessibility.</p>
        </div>
        <div className="features-temp">
          <div className="feature-moji">
            <Image src={Curated} />
          </div>
          <h2>Curated Learning Paths</h2>
          <p>Structured learning paths designed for beginners, covering topics from basic to advanced levels in Web3 and cryptocurrency.</p>
        </div>
        <div className="features-temp">
          <div className="feature-moji">
            <Image src={UserC} />
          </div>
          <h2>User-Contributed Content</h2>
          <p>Enable users to contribute verified content or share resources, with content reviewed and validated through a decentralized protocol.</p>
        </div>
        <div className="features-temp">
          <div className="feature-moji">
            <Image src={NFT} />
          </div>
          <h2>NFT Certifcation</h2>
          <p>Upon completing courses or quizzes, users can receive NFT-based certificates for proof of knowledge.</p>
        </div>
        <div className="features-temp">
          <div className="feature-moji">
            <Image src={Gov} />
          </div>
          <h2>DAO Governance</h2>
          <p>A decentralized governance model will allow contributors and users to vote on content and platform updates.</p>
        </div>
      </div>
    </div>
  )
}

export default HeroFeatures
