import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='mb-4 hidden'>
        <Link to='/'>Home</Link>
        <Link to='/menu'>Menu</Link>
        <Link to='/cart'>Cart</Link>
        <Link to='/checkout'>Checkout</Link>
    </div>
  )
}

export default Navbar