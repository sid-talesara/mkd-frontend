'use client';
import { ShopCardDummyData } from '@/shared/data';
import ShopCard from '../shared/Cards/ShopCard';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import Image from 'next/image';

const FeaturedShops = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 py-16 px-5">
      <h3 className="text-4xl font-light ">
        <span className="font-bold">FEATURED </span>
        STORES
      </h3>
      {/* mobile slider view */}
      <div className="md:hidden max-w-screen-xl flex   overflow-x-auto gap-5   w-full">
        <Swiper
          cssMode={true}
          navigation={false}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          loop={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper "
        >
          {ShopCardDummyData.map((shop, index) => (
            <SwiperSlide>
              <ShopCard />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* desktop view */}
      <div className="hidden md:flex max-w-screen-xl    overflow-x-auto gap-5   w-full">
        {ShopCardDummyData.map((shop, index) => (
          <ShopCard />
        ))}
      </div>
    </div>
  );
};

export default FeaturedShops;
