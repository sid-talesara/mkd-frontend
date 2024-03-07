'use client';
import React, { useState } from 'react';
import NearByStoresPage from './NearbyStores';
import Sidebar from './Sidebar';
const NearByStores = () => {
  const [activeMarker, setActiveMarker] = useState<number | null>(null);

  const handleActiveMarker = (markerId: number) => {
    setActiveMarker(markerId === activeMarker ? null : markerId);
  };
  return (
    <div className="flex flex-col lg:flex-row overflow-x-hidden w-screen">
      <div className="w-screen lg:w-96 sideBar overflow-x-hidden">
        <Sidebar handleActiveMarker={handleActiveMarker} />
      </div>
      <div className=" content lg:w-full">
        <NearByStoresPage
          activeMarker={activeMarker}
          setActiveMarker={setActiveMarker}
          handleActiveMarker={handleActiveMarker}
        />
      </div>
    </div>
  );
};

export default NearByStores;
