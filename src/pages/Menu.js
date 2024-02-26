import React, {useState,useEffect} from 'react';
import axios from 'axios';
import Slider from '../components/Slider';
import Footer from "../components/Footer";

const Menu = () => {

  const [items,setItems] = useState([])

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get('http://testing-env.eba-qjnfvjf6.ap-south-1.elasticbeanstalk.com/api/items'); 
        setItems(response.data);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchItems();
  }, []);


  return (
    <div className=' mt-28 mb-4'>
      <Slider row="1" heading="Burgers" foodCategory="burger" foodData={items} setItems={setItems}/>    
      <Slider row="2" heading="Pizzas" foodCategory="pizza" foodData={items} setItems={setItems}/>    
      <Slider row="3" heading="Drinks" foodCategory="drink" foodData={items} setItems={setItems}/> 
      <div className='mt-8'>
        <Footer/>
      </div>
    </div>
  )
}

export default Menu