import React, {useState,useEffect} from 'react';
import axios from 'axios';

const Home = () => {

  const [items,setItems] = useState([])

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/items'); // Assuming your backend endpoint is /api/items
        setItems(response.data);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchItems();
  }, []);

  const handleIncrement = (itemId) => {
    setItems(prevItems => 
        prevItems.map(item => 
            item._id === itemId? {...item, quantity: item.quantity + 1} : item
        )
    )
  }

  const handleDecrement = (itemId) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item._id === itemId ? { ...item, quantity: Math.max(0, item.quantity - 1) } : item
      )
    );
  };

  return (
    <div className='p-12 text-2xl'>
        {items.map(item => (
            <div key={item._id}>
                <span>{item.name} : {item.quantity}</span>
                <button onClick={() => handleIncrement(item._id)}>+</button>
                <button onClick={() => handleDecrement(item._id)}>-</button>
            </div>
        ))}
    </div>
  )
}

export default Home