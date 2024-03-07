'use client';
import { HomeShopCardsData } from '@/shared/data';
import ShopCard from '../shared/Cards/ShopCard';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

const FeaturedShops = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 py-16 px-5 bg-mkd-light  ">
      <h3 className="text-4xl font-light ">
        <span className="font-bold">FEATURED </span>
        STORES
      </h3>
      {/* mobile slider view */}
      <div className="md:hidden max-w-screen-xl flex    overflow-x-auto gap-5 text-left  w-full">
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
          {HomeShopCardsData.map((shop, index) => (
            <SwiperSlide key={index}>
              <ShopCard {...shop} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* desktop view */}
      <div className="hidden md:flex max-w-screen-xl overflow-x-auto gap-5 w-full">
        {HomeShopCardsData.map((shop, index) => (
          <div key={index}>
            <ShopCard {...shop} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedShops;
