import { useState } from 'react'
import { close, logo, menu } from '../assets'
import {navLinks} from '../constants'

const Navbar = () => {
  return (
    <nav className='w-full flex justify-between items-center navbar py-6' >
      <img src={logo} alt='Mohaimin Logo' className='w-[124px] h-[32px]'/>
    </nav>
  )
}

export default Navbar
