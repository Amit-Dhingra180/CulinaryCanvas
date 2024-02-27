import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className="bg-cover bg-bottom min-h-screen p-1" style={{ backgroundImage: 'url(/main.jpg)' }}>
        
        <div className='w-4/5 h-2/5 absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/4 flex flex-col justify-around md:w-96 md:left-1/3 lg:left-1/4 xl:left-0 xl:translate-x-0 xl:ml-24 lg:top-1/2'>

          <div className='text-4xl md:text-5xl lg:text-6xl text-white mt-8 mb-4'>
            Begin your Journey here with <span className='text-green-600 font-semibold'>fresh</span> ingredients
          </div>

          <Link to='/menu' className='text-white text-2xl border-2 rounded-full flex justify-center p-2 w-44 lg:mt-12'>
            Browse Menu
          </Link>

        </div>

      </div>
    </div>
  )
}

export default Home