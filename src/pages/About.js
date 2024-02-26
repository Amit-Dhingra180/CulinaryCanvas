import React from 'react';

import Footer from '../components/Footer';


const About = () => {
  return (
    <div>
      
      <img src="horizontal.jpg" alt='img' className='mt-24 w-full h-60 object-cover'/>
      <h1 className='text-center mt-6 text-2xl font-bold xl:text-red-500 lg:text-3xl'>About Us</h1>
      <h2 className='mx-8 mt-6 text-lg font-semibold md:mx-16 lg:text-2xl xl:ml-20'>Why people choose us</h2>
      <div className='flex justify-around'> 
      <img src="about.jpg" alt='img' className='object-cover w-1/2 h-1/2 hidden mx-8 mt-6 lg:flex xl:ml-20'/>
      <div className='mx-8 mt-6 font-semibold md:mx-16 lg:text-lg xl:mx-20'>
        <p>At Fusion Flavors, we take you on a culinary journey around the world, serving an eclectic mix of flavors and dishes inspired by cuisines from every corner of the globe. Our restaurant is a vibrant melting pot of tastes, where you can savor the essence of international cuisine without leaving your seat.</p> <br/>
        <p>From the sizzling streets of Bangkok to the charming trattorias of Italy, our menu is a testament to the richness and diversity of global gastronomy. Whether you're in the mood for savory sushi rolls, fragrant Indian curries, or classic American burgers, Fusion Flavors has it all.</p> <br/>
        <p>Start your meal with a taste of the Mediterranean, with our zesty Greek salads and creamy hummus, then journey to Japan with our expertly crafted sushi and sashimi. For those craving comfort food, our menu boasts mouthwatering Italian pasta dishes and cheesy Mexican quesadillas.</p> <br/>
        <p>Don't forget to explore our grill section, where succulent steaks and tender kebabs are cooked to perfection over an open flame. Pair your meal with one of our signature cocktails or choose from an extensive wine list that spans the globe.</p>
      </div>
      </div>
      <div className='mt-8'>
        <Footer/>
      </div>
      
    </div>
  )
};

export default About;
