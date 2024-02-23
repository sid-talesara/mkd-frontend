'use client';
import React, { useState } from 'react';
import { GoogleMap, InfoWindowF, MarkerF, useLoadScript } from '@react-google-maps/api';
import { markersLocation as markers } from '@/shared/data';
import Image from 'next/image';
import Link from 'next/link';
type Props = {};

const NearByStoresPage = ({ activeMarker, setActiveMarker, handleActiveMarker }) => {
  // const [activeMarker, setActiveMarker] = useState(null);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  // const handleActiveMarker = (markerId) => {
  //   setActiveMarker(markerId === activeMarker ? null : markerId);
  // };
  return (
    <div>
      <div style={{ height: '100vh', width: '100%' }}>
        {isLoaded ? (
          <GoogleMap
            center={{ lat: 26.904276, lng: 75.808762 }}
            zoom={13}
            onClick={() => setActiveMarker(null)}
            mapContainerStyle={{ width: '100%', height: '100vh' }}
          >
            {markers.map(({ id, name, position }) => (
              <MarkerF
                key={id}
                position={position}
                onClick={() => handleActiveMarker(id)}
                icon={{
                  url: '/marker.png',
                  scaledSize: { width: 60, height: 60 },
                }}
              >
                {activeMarker === id ? (
                  <InfoWindowF onCloseClick={() => setActiveMarker(null)}>
                    <div className="">
                      <Image src={'/mkd-logo-dark.png'} width={30} height={30} alt="mkd-logo" />
                      <p className="text-lg font-semibold pt-1 ">{name}</p>
                      <Link href={'tel:+917073232505'}>
                        <p className="underline py-1 ">Ph: +91-98988-09989</p>
                      </Link>
                      <Link href={'tel:+917073232505'}>
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
    </div>
  );
};

export default NearByStoresPage;
