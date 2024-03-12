'use client';
import React, { useEffect, useState } from 'react';
import NearByStoresPage from './NearbyStores';
import Sidebar from './Sidebar';
import axios from 'axios';
import Loader from '@/components/shared/Loader';

const NearByStores = () => {
  const [activeMarker, setActiveMarker] = useState<string | null>(null);
  const [markersData, setMarkersData] = useState();
  const [location, setLocation] = useState<{ lat: number; lng: number }>();

  const fetchLocation = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        const { latitude, longitude } = coords;
        console.log(latitude, longitude);
        setLocation({ lat: latitude, lng: longitude });
      });
    }
  };

  // Fetch location when the component mounts
  useEffect(() => {
    fetchLocation();
  }, []);

  // Fetch shops data from Sheets
  const fetchData = async () => {
    const params = {
      apiKey: `${process.env.NEXT_PUBLIC_SHEETSON_API_KEY}`,
      spreadsheetId: `${process.env.NEXT_PUBLIC_SHEETID}`,
    };

    const url = `${process.env.NEXT_PUBLIC_SHEETSON_URL}/v2/sheets/${process.env.NEXT_PUBLIC_SHEETNAME_2}?limit=100`;

    try {
      const response = await axios.get(url, { params });
      console.log('----------------------------');
      console.log(response.data);
      setMarkersData(response.data.results);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleActiveMarker = (markerId: string) => {
    setActiveMarker(markerId === activeMarker ? null : markerId);
  };

  return (
    <div className="flex flex-col lg:flex-row overflow-x-hidden w-screen">
      {markersData === undefined && (
        <div className="h-screen w-screen flex justify-center items-center">
          <Loader />
        </div>
      )}
      <div className="w-screen lg:w-96 sideBar overflow-x-hidden">
        {markersData !== undefined && <Sidebar handleActiveMarker={handleActiveMarker} markersData={markersData} />}
      </div>
      <div className=" content lg:w-full">
        {location !== undefined && markersData !== undefined && (
          <NearByStoresPage
            location={location}
            activeMarker={activeMarker}
            setActiveMarker={setActiveMarker}
            handleActiveMarker={handleActiveMarker}
            markersData={markersData}
          />
        )}
      </div>
    </div>
  );
};

export default NearByStores;
