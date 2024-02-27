import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get('http://testing-env.eba-qjnfvjf6.ap-south-1.elasticbeanstalk.com/api/cart');
        setCartItems(response.data);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchCartItems();
  }, []);

  let subCost = 0;
  cartItems.forEach(item => {
    subCost += item.quantity*item.price
  })

  const delivery = 50
  const gst = subCost*0.1
  const total = subCost + gst + delivery

  return (
    <div className='mx-3 md:mx-14 lg:mx-20'>
      
      <h1 className='mt-32 text-4xl font-bold text-center lg:text-6xl'>Cart</h1>
      {cartItems.length > 0 ? (
        <>
          <div className='p-4 border-4 mt-4'>
            <table className="min-w-full  md:text-xl text-center">
              <thead>
                <tr className="bg-gray-100 text-sm">
                  <th></th>
                  <th className="py-4">Product</th>
                  <th>Qty</th>
                  <th>Price</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item._id}>
                    <td className='py-4 text-center pl-4'>
                      <div className='flex items-center justify-center'>
                        <img
                          className='w-16 h-16 md:w-20 md:h-20 lg:w-28 lg:h-28'
                          src={item.image}
                          alt={item.name}
                        />
                      </div>
                    </td>
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                    <td>{item.price}</td>
                    <td>{item.price * item.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <h1 className='mt-8 text-center text-xl font-semibold lg:text-3xl'>Cart Total</h1>
            <div className='p-4 border-4 mt-4'>
              <table className="min-w-full md:text-xl text-left">
                <tbody>
                  <tr>
                    <td className='py-4 font-semibold'>Subtotal</td>
                    <td>{subCost}</td>
                  </tr>
                  <tr>
                    <td className='py-4 font-semibold'>Delivery</td>
                    <td>{delivery}</td>
                  </tr>
                  <tr>
                    <td className='py-4 font-semibold'>GST (10%)</td>
                    <td>{gst}</td>
                  </tr>
                  <tr>
                    <td className='py-4 font-semibold'>Total</td>
                    <td className='font-semibold'>Rs.{total}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className='flex justify-center mt-6 text-xl font-semibold'>
              <Link to='/checkout'>
                <button className='text-white mb-6 bg-black h-24 w-96'>
                  Proceed To Checkout
                </button>
              </Link>       
            </div>
          </div>

        </>
      ) : (
        <p className='mt-4 text-center text-xl font-semibold lg:text-3xl text-red-600'>Cart is empty</p>
      )}
    </div>
  );
};

export default Cart;
