import React, {useState,useEffect} from 'react';
import axios from 'axios';
import Slider from '../components/Slider';
import Footer from "../components/Footer";

const Menu = () => {

  const [items,setItems] = useState([])

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get('https://www.amitdhingra.co.in/api/items'); 
        setItems(response.data);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchItems();
  }, []);

  return (
    <div className=' mt-28 mb-4'>
      <h1 className='text-5xl font-bold text-center lg:text-7xl'>Menu</h1>
      <Slider row="1" heading="Burgers" foodCategory="burger" foodData={items} setItems={setItems}/>    
      <Slider row="2" heading="Pizzas" foodCategory="pizza" foodData={items} setItems={setItems}/>  
      <Slider row="3" heading="Pastas" foodCategory="pasta" foodData={items} setItems={setItems}/>   
      <Slider row="4" heading="Milkshakes" foodCategory="milkshake" foodData={items} setItems={setItems}/> 
      <div className='mt-8'>
        <Footer/>
      </div>
    </div>
  )
}

export default Menu