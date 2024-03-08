'use client';
import React, { useEffect, useState } from 'react';
import { GoogleMap, InfoWindowF, MarkerF, useLoadScript } from '@react-google-maps/api';
import { markersLocation as markers } from '@/shared/data';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
import { Marker } from '@/shared/types';

interface NearByStoresPageProps {
  location: {
    lat: number;
    lng: number;
  };
  activeMarker: string | null; // Adjusted to string to match Marker id type
  setActiveMarker: (markerId: string | null) => void;
  handleActiveMarker: (markerId: string) => void; // Adjusted to string to match Marker id type
  markersData: Marker[]; // Corrected to an array of Marker objects
}

const NearByStoresPage: React.FC<NearByStoresPageProps> = ({
  location,
  activeMarker,
  setActiveMarker,
  handleActiveMarker,
  markersData,
}) => {
  // const [activeMarker, setActiveMarker] = useState(null);
  const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: googleMapsApiKey,
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      {isLoaded ? (
        <GoogleMap
          center={{ lat: location.lat, lng: location.lng }}
          zoom={15}
          onClick={() => setActiveMarker(null)}
          mapContainerStyle={{ width: '100%', height: '100vh' }}
        >
          {markersData.map((marker: Marker) => (
            <MarkerF
              key={marker.id}
              position={{ lat: parseFloat(marker.lat), lng: parseFloat(marker.lng) }} // Conversion to number
              onClick={() => handleActiveMarker(marker.id)}
              icon={{
                url: '/marker.png',
                scaledSize: new google.maps.Size(60, 60),
              }}
            >
              {activeMarker === marker.id ? (
                <InfoWindowF onCloseClick={() => setActiveMarker(null)}>
                  <div className="">
                    <Image src={'/mkd-logo-dark.png'} width={30} height={30} alt="mkd-logo" />
                    <p className="text-lg font-semibold pt-1 ">{marker.name}</p>
                    <Link href={`tel:${marker.phone}`}>
                      <p className="underline py-1 ">{marker.phone}</p>
                    </Link>
                    <Link href={marker.shopLocation} target="_blank">
                      <p className="py-1 text-blue-600">Open Maps</p>
                    </Link>
                  </div>
                </InfoWindowF>
              ) : null}
            </MarkerF>
          ))}
        </GoogleMap>
      ) : null}
    </div>
  );
};

export default NearByStoresPage;
