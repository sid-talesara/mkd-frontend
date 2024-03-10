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
import { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '../shared/Loader';

const FeaturedShops = () => {
  const [storesData, setStoresData] = useState([]);
  // getting shops data from Sheets
  const fetchData = async () => {
    const params = {
      apiKey: `${process.env.NEXT_PUBLIC_SHEETSON_API_KEY}`,
      spreadsheetId: `${process.env.NEXT_PUBLIC_SHEETID}`,
    };

    const url = `${process.env.NEXT_PUBLIC_SHEETSON_URL}/v2/sheets/${process.env.NEXT_PUBLIC_SHEETNAME_4}`;

    try {
      const response = await axios.get(url, { params });
      setStoresData(response.data.results);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {storesData.length !== 0 && (
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
              {storesData.map((shop, index) => (
                <SwiperSlide key={index}>
                  <ShopCard shop={shop} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {/* desktop view */}
          <div className="hidden md:flex max-w-screen-xl overflow-x-auto gap-5 w-full">
            {storesData.map((shop, index) => (
              <div key={index}>
                <ShopCard shop={shop} />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default FeaturedShops;
