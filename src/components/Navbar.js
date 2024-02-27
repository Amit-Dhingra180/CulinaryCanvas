import React from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';

const Navbar = () => {

    const [nav, setNav] = useState(true)

    const handleNav = () => {
      setNav(!nav)
    }

    return (
      <div className='absolute w-full h-24 bg-black inset-0 flex justify-between items-center p-4'>
        
        <div className=' text-yellow-500 text-4xl ml-6 md:ml-12  lg:text-6xl xl:ml-32'>
          <Link to='/'>Gourmet</Link>
        </div>

        <div className='text-white space-x-8 mr-6 text-lg hidden md:flex items-center lg:text-xl lg:mr-16 lg:space-x-16'>
          <Link to='/menu' className='hover:text-yellow-500'>Menu</Link>
          <Link to='/about' className='hover:text-yellow-500'>About</Link>
          <Link to='/cart' className='hover:text-yellow-500'>Cart {}</Link>
          <Link to='/reserve' className='hidden hover:text-yellow-500'>Reserve</Link>

        </div>

        <div className='text-white mr-4 cursor-pointer md:hidden' onClick={handleNav}>
          {!nav ? <AiOutlineClose size={28}/> : <AiOutlineMenu size={28}/>}          
        </div>

        <div className={!nav ? 'flex flex-col items-center justify-around text-4xl text-white fixed top-0 left-0 w-[60%] h-full bg-gray-800 ease-in-out duration-500 md:hidden z-10' : 'fixed left-[-100%]'}>
          <div className=' text-yellow-500 text-4xl ml-6'>
          <Link to='/'>Gourmet</Link>
          </div>
          <Link to='/menu'>Menu</Link>
          <Link to='/about'>About</Link>
          <Link to='/cart'>Cart</Link>
          <Link to='/reserve' className='hidden'>Reserve</Link>
        </div>

      </div>
    );
}

export default Navbar;