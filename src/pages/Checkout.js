import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const Checkout = () => {
  return (
    <div>
        <Navbar/>
        <form className='mt-32 mx-10 space-y-4'>
            <h1 className='text-2xl font-semibold text-center'>Checkout</h1>
            <h1 className='text-xl font-semibold'>Billing Details</h1>
            <h2>First Name</h2>
            <input type='text' className='bg-gray-200 w-full h-12  px-4'></input>
            <h2>Last Name</h2>
            <input type='text' className='bg-gray-200 w-full  h-12 '></input>
            <h2>Country/Region</h2>
            <input type='text' className='bg-gray-200 w-full  h-12 '></input>
            <h2>Street Address</h2>
            <input type='text' className='bg-gray-200 w-full  h-12 '></input>
            <h2>Town/City</h2>
            <input type='text' className='bg-gray-200 w-full  h-12 '></input>
            <h2>Phone</h2>
            <input type='text' className='bg-gray-200 w-full  h-12 '></input>
            <h2>Email</h2>
            <input type='text' className='bg-gray-200 w-full  h-12 '></input>
            <h2>Date</h2>
            <input type='text' className='bg-gray-200 w-full  h-12 '></input>
            <h2>Time</h2>
            <input type='text' className='bg-gray-200 w-full  h-12 '></input>
            <h2>Order notes (optional)</h2>
            <textarea rows='4' cols='50' className='bg-gray-200 w-full'/>
            <div className='text-center pb-4'>
                <Link to='/confirm'>
                    <button className='bg-black text-white text-lg p-4 w-full'>Place Order</button>
                </Link>
            </div>
        </form>
        <Footer/>
    </div>
  )
}

export default Checkout