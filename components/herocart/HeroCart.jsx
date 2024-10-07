import Link from 'next/link'
import React from 'react'
import './HeroCart.scss'
import HeroCourse from '../herocourse/HeroCourse'

const HeroCart = () => {
  return (
<div className='herocart'>
<div className='flex w-full items-center justify-center p-8 font-[Poppins]'>
      <div className="flex items-center justify-around w-full text-xl text-white">
        <div className="flex gap-4">
            <Link className='text-blue-700' href='/'>All</Link>
            <Link href='/'>Web3</Link>
            <Link href='/'>DeFi</Link>
            <Link href='/'>Blockchain</Link>
            <Link href='/'>Cryptocurrency</Link>
        </div>
        <div className="right"><Link className='text-blue-700' href=''>Access Full Library</Link></div>
      </div>
    </div>
    <HeroCourse />
</div>
  )
}

export default HeroCart
