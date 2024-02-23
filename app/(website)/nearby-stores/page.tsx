'use client';
import React, { useState } from 'react';
import NearByStoresPage from './NearbyStores';
import Sidebar from './Sidebar';
const NearByStores = () => {
  const [activeMarker, setActiveMarker] = useState(null);

  const handleActiveMarker = (markerId) => {
    setActiveMarker(markerId === activeMarker ? null : markerId);
  };
  return (
    <div className="flex w-screen">
      <div className="w-0 lg:w-96 sideBar overflow-x-hidden">
        <Sidebar handleActiveMarker={handleActiveMarker} />
      </div>
      <div className="w-screen content lg:w-full">
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
