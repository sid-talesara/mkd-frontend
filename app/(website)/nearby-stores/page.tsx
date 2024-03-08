'use client';
import React, { useEffect, useState } from 'react';
import NearByStoresPage from './NearbyStores';
// import { useRouter } from 'next/router';
import Sidebar from './Sidebar';
const NearByStores = () => {
  const [activeMarker, setActiveMarker] = useState<number | null>(null);

  const [location, setLocation] = useState();

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        const { latitude, longitude } = coords;
        console.log(latitude, longitude);
        setLocation({ lat: latitude, lng: longitude });
      });
    }
  }, []);
  const handleActiveMarker = (markerId: number) => {
    setActiveMarker(markerId === activeMarker ? null : markerId);
  };
  return (
    <div className="flex flex-col lg:flex-row overflow-x-hidden w-screen">
      <div className="w-screen lg:w-96 sideBar overflow-x-hidden">
        <Sidebar handleActiveMarker={handleActiveMarker} />
      </div>
      <div className=" content lg:w-full">
        {location !== undefined && (
          <NearByStoresPage
            location={location}
            activeMarker={activeMarker}
            setActiveMarker={setActiveMarker}
            handleActiveMarker={handleActiveMarker}
          />
        )}
      </div>
    </div>
  );
};

export default NearByStores;
