import React from 'react'

const Footer = () => {
  return (
    <div className='text-center text-sm py-6 text-gray-700'>
        <span>&copy; { new Date().getFullYear() } All Right Reserved</span>
    </div>
  )
}

export default Footer;