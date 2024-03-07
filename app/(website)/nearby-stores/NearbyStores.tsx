'use client';
import React, { useState } from 'react';
import { GoogleMap, InfoWindowF, MarkerF, useLoadScript } from '@react-google-maps/api';
import { markersLocation as markers } from '@/shared/data';
import Image from 'next/image';
import Link from 'next/link';

interface NearByStoresPageProps {
  activeMarker: number | null;
  setActiveMarker: (markerId: number | null) => void;
  handleActiveMarker: (markerId: number) => void;
}
const NearByStoresPage: React.FC<NearByStoresPageProps> = ({ activeMarker, setActiveMarker, handleActiveMarker }) => {
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
          center={{ lat: 26.89493412218653, lng: 75.80415140527356 }}
          zoom={12}
          onClick={() => setActiveMarker(null)}
          mapContainerStyle={{ width: '100%', height: '100vh' }}
        >
          {markers.map(({ id, name, position, phoneNumber, link }) => (
            <MarkerF
              key={id}
              position={position}
              onClick={() => handleActiveMarker(id)}
              icon={{
                url: '/marker.png',
                scaledSize: new google.maps.Size(60, 60),
              }}
            >
              {activeMarker === id ? (
                <InfoWindowF onCloseClick={() => setActiveMarker(null)}>
                  <div className="">
                    <Image src={'/mkd-logo-dark.png'} width={30} height={30} alt="mkd-logo" />
                    <p className="text-lg font-semibold pt-1 ">{name}</p>
                    <Link href={`tel:${phoneNumber}`}>
                      <p className="underline py-1 ">{phoneNumber}</p>
                    </Link>
                    <Link href={link} target="_blank">
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
