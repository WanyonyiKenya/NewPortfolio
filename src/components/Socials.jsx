import React from 'react'

const Socials = () => {
  return (
    <div className='flex justify-center md:justify-start my-10 gap-7'>
        <a
          className='hover:opacity-50 transition duration-500'
          href='https://www.linkedin.com'
          target='_blank'
          rel = 'norefferer'
        >
            <img
                alt='linkedin'
                src='../assets/linkedin.png'
            />
        </a>

        <a
          className='hover:opacity-50 transition duration-500'
          href='https://www.twitter.com'
          target='_blank'
          rel = 'norefferer'
        >
            <img
                alt='twitter'
                src='../assets/twitter.png'
            />
        </a>

        <a
          className='hover:opacity-50 transition duration-500'
          href='https://www.facebook.com'
          target='_blank'
          rel = 'norefferer'
        >
            <img
                alt='facebook'
                src='../assets/facebook.png'
            />
        </a>

        <a
          className='hover:opacity-50 transition duration-500'
          href='https://www.instagram.com'
          target='_blank'
          rel = 'norefferer'
        >
            <img
                alt='instagram'
                src='../assets/instagram.png'
            />
        </a>

      
    </div>
  )
}

export default Socials