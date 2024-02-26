import React from 'react'
import Item from './Item'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';



const Slider = ({row,heading,foodCategory,foodData,setItems}) => {

    const slideLeft = () => {
        var slider = document.getElementById(`slider-${row}`)
        slider.scrollLeft = slider.scrollLeft - 500
      }
    
      const slideRight = () => {
        var slider = document.getElementById(`slider-${row}`)
        slider.scrollLeft = slider.scrollLeft + 500
      }

      const filteredFood = foodData.filter(item => item.class === foodCategory);

  return (
    <div>
        <h1 className='text-3xl font-semibold m-4 ml-12 lg:text-5xl'>{heading}</h1>
        <div className='realteive flex items-center'>
            <MdChevronLeft onClick={slideLeft} size={40} className=' opacity-50 cursor pointer hover:opacity-100'/>
                <div id={`slider-${row}`} className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide flex'>
                
                    {filteredFood.map((foodItem) => (
                        <div key={foodItem._id}>
                            <Item item={foodItem} setItems={setItems}/>
                        </div>
                    ))}

                </div>
            <MdChevronRight onClick={slideRight} size={40} className=' opacity-50 cursor pointer hover:opacity-100'/>        
        </div>
    </div>
  )
}

export default Slider