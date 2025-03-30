import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay} from 'swiper/modules'
import 'swiper/css'; 

import 'swiper/css/autoplay';
import MenuSwiper from './MenuSwiper';

function MenuHero() {
  return (
    <section className='menu__hero'>
       <div className="container">
       <h4>Sevimli taomingizga buyurtma bering!</h4>
        <Swiper 
        modules={[Autoplay]}
       autoplay={{
        delay:2000,
       }}
        spaceBetween={10} 
        loop={true} className="mySwiper">
        <SwiperSlide> <MenuSwiper/> </SwiperSlide>
        <SwiperSlide><MenuSwiper/></SwiperSlide>
        
      </Swiper>
       </div>
      
    </section>
  )
}

export default MenuHero
