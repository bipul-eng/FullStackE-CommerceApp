import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { maincarousel } from './maincarousel';


const MainCarousel = () => {

    const items = maincarousel.map((item)=>
        {
            return <img className='cursor-pointer' src={item.image} alt=""/>;
        })
    
  
    return <AliceCarousel
        items={items}
        autoPlay
        autoPlayInterval={500}
        infinite
        disableButtonsControls
    />

}

export default MainCarousel;