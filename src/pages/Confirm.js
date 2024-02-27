import React from 'react';
import { Link } from 'react-router-dom';

const Confirm = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='text-3xl font-bold text-center lg:text-5xl md:space-y-2'>
        <p>Order Confirmed!</p> <br/>
        <p>Enjoy your meal</p>
        <Link to='/'>
            <p className='mt-8 text-base lg:mt-12'>
                Back to Home
            </p>
        </Link>
      </div>
    </div>
  );
};

export default Confirm;
