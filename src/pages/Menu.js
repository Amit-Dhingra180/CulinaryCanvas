import React, {useState,useEffect} from 'react';
import axios from 'axios';
import Item from '../components/Item';

const Menu = () => {

  const [items,setItems] = useState([])

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get('http://testing-env.eba-qjnfvjf6.ap-south-1.elasticbeanstalk.com/api/items'); // Assuming your backend endpoint is /api/items
        setItems(response.data);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchItems();
  }, []);



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
    <div className=' text-2xl'>
           {items.map(item => (
        <Item
          key={item._id}
          item={item}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
      ))}
    </div>
  )
}

export default Menu