'use client';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import Image from 'next/image';

export default function Carousal() {
  return (
    <>
      <div className="h-[60vh] hidden md:block">
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          autoplay={true}
          loop={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Image src={'/slide1.png'} width={1500} height={10} alt="some" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={'/slide2.png'} width={1500} height={10} alt="some" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={'/slide3.png'} width={1500} height={10} alt="some" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={'/slide4.png'} width={1500} height={10} alt="some" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="h-[80vh] md:hidden ">
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          autoplay={true}
          loop={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Image src={'/mobile-slide1.png'} width={1500} height={10} alt="some" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={'/mobile-slide2.png'} width={1500} height={10} alt="some" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={'/mobile-slide3.png'} width={1500} height={10} alt="some" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={'/mobile-slide4.png'} width={1500} height={10} alt="some" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
