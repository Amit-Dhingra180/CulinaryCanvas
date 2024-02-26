import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='w-full bg-gray-200 pb-6'>
        <div className='md:flex justify-around text-center py-4'>
            <div>
                <h1 className='text-lg font-semibold pt-4 lg:text-3xl'>Contact Us</h1>
                    <div className='lg:text-xl'>
                        <p className='pt-2'>Call Us</p>
                        <p>900-819-6040</p>
                        <p className='pt-2'>Email Us</p>
                        <p>foodfusion@gmail.com</p>
                        <p className='pt-2'>Our Location</p>
                        <p>577 Gladstone</p>
                    </div>
                </div>
            <div>
                <h1 className='text-lg font-semibold pt-4 lg:text-3xl'>Gourmet</h1>
                <p className='pt-2 lg:text-2xl'>Where Every Bite is a Global Delight!</p>
            </div>
            <div>
                <h1 className='text-lg font-semibold pt-4 lg:text-3xl'>Quick Links</h1>
                <div className='flex flex-col space-y-2 lg:text-2xl lg:space-y-4'>
                    <Link to='/menu' className='pt-2'>Menu</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/contact'>Contact</Link>
                    <Link to='/cart'>Cart {}</Link>
                </div>

            </div>
        </div>
        <div className='mt-4 text-center md:flex justify-around lg:text-xl'>
            <p>© 2023 CulinaryGrove. All rights reserved | Powered by FoodFusion</p>
            <p>Terms & Conditions | Privacy Policy</p>
        </div>
    </div>
  )
}

export default Footer;