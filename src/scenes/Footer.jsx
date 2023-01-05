import React from 'react'
import Socials from '../components/Socials'

const Footer = () => {
  return (
    <footer className='h-64 bg-red pt-10 mt-5'>
        <div className='w-5/6 mx-auto '>
        <Socials />
        <div className='md:flex justify-center md:justify-between text-center'>
            <p className='font-playfair font-semibold text-2xl text-yellow'>Brian Wanyonyi</p>
            <p className='font-playfair text-md text-yellow'>All rights reserved.</p>
        </div>
        </div>
    </footer>
  )
}

export default Footer