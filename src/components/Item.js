import React from 'react';
import axios from 'axios';

const Item = ({ item, setItems}) => {

  const handleIncrement = async (itemId) => {
    try {
      await axios.post('http://testing-env.eba-qjnfvjf6.ap-south-1.elasticbeanstalk.com/api/inc',{itemId});
      setItems(prevItems =>
        prevItems.map(item =>
          item._id === itemId ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } catch (error) {
      console.error('Error updating item quantity:', error);
    }
  };



  const handleDecrement = async (itemId) => {
    await axios.post('http://testing-env.eba-qjnfvjf6.ap-south-1.elasticbeanstalk.com/api/dec',{itemId});

    setItems(prevItems =>
      prevItems.map(item =>
        item._id === itemId ? { ...item, quantity: Math.max(0, item.quantity - 1) } : item
      )
    );
  };
  return (
    <div key={item._id} className='w-64 mr-6 lg:w-96'>
      <img src={item.image} className='w-full h-40 object-cover rounded-lg lg:h-64 hover:scale-105 hover:ease-in-out duration-500' alt='burger'/>
      <div className='mt-2'>
      <span className='font-semibold text-xl lg:text-3xl'>{item.name} - {item.quantity}</span>
      </div>
      <div className='mt-2 flex justify-between items-center'>
      <span className='mr-4 lg:text-lg font-semibold text-red-600'>Rs.{item.price}</span>
      <div className='mr-4'>
      <button onClick={() => handleDecrement(item._id)} className='text-white bg-black w-6 h-6 font-bold lg:w-8 lg:h-8 rounded-lg'>-</button>
      <button onClick={() => handleIncrement(item._id)} className='text-white bg-black w-6 h-6 font-bold lg:w-8 lg:h-8  rounded-lg ml-4'>+</button>
      </div>
      </div>
    </div>
  );
};

export default Item;