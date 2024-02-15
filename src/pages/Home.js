import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className="bg-cover min-h-screen p-1" style={{ backgroundImage: 'url(/home_bg.jpg)' }}>
        
        <div className='bg-blue-500 absolute top-4 left-4 w-8 h-8'>

        </div>

        <div className='bg-red-500 w-4/5 h-2/5 absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/4 flex flex-col justify-around'>

          <div className='text-4xl text-white'>
            Begin your Journey here with fresh ingredients
          </div>

          <Link to='/menu' className='text-white text-2xl border-2 rounded-full flex justify-center p-2 w-44'>
            Browse Menu
          </Link>

        </div>

      </div>
    </div>
  )
}

export default Home