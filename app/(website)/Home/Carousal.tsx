'use client';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';

export default function Carousal() {
  return (
    <div>
      <div className="h-[60vh] hidden  md:block ">
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          autoplay={{
            delay: 2500,
          }}
          loop={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Link href={'/nearby-stores'}>
              <Image src={'/slide1.png'} width={1500} height={10} alt="some" />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href={'/nearby-stores'}>
              <Image src={'/slide6.png'} width={1500} height={10} alt="some" />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href={'/nearby-stores'}>
              <Image src={'/slide2.png'} width={1500} height={10} alt="some" />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href={'/nearby-stores'}>
              <Image src={'/slide3.png'} width={1500} height={10} alt="some" />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href={'/nearby-stores'}>
              <Image src={'/slide4.png'} width={1500} height={10} alt="some" />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href={'/register-your-business'}>
              <Image src={'/slide-5.png'} width={1500} height={10} alt="some" />
            </Link>
          </SwiperSlide>
          {/* <SwiperSlide>
            <Link href={'/start-business'}>
              <Image src={'/slide-6.png'} width={1500} height={10} alt="some" />
            </Link>
          </SwiperSlide> */}
        </Swiper>
      </div>
      <div className="h-[80vh] md:hidden ">
        <Swiper
          spaceBetween={30}
          cssMode={true}
          centeredSlides={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          autoplay={{
            delay: 2500,
          }}
          loop={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Link href={'/nearby-stores'}>
              <Image src={'/mobile-slide2.png'} width={1500} height={10} alt="some" />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href={'/nearby-stores'}>
              <Image src={'/mobile-slide6.png'} width={1500} height={10} alt="some" />
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link href={'/nearby-stores'}>
              <Image src={'/mobile-slide3.png'} width={1500} height={10} alt="some" />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href={'/nearby-stores'}>
              <Image src={'/mobile-slide4.png'} width={1500} height={10} alt="some" />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href={'/nearby-stores'}>
              <Image src={'/mobile-slide1.png'} width={1500} height={10} alt="some" />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href={'/register-your-business'}>
              <Image src={'/mobile-slide-5.png'} width={1500} height={10} alt="some" />
            </Link>
          </SwiperSlide>
          {/* <SwiperSlide>
            <Link href={'/start-business'}>
              <Image src={'/mobile-slide-6.png'} width={1500} height={10} alt="some" />
            </Link>
          </SwiperSlide> */}
        </Swiper>
      </div>
    </div>
  );
}
