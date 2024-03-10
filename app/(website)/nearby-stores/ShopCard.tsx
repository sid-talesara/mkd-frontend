import CardTags from '@/components/shared/Cards/CardTags';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import SearchBar from './SearchBar';
import { Marker } from '@/shared/types';
type Props = {
  handleActiveMarker: (markerId: string) => void;
  markersData: Marker[];
};

const ShopCard: React.FC<Props> = ({ handleActiveMarker, markersData }) => {
  // Use FC type and Props interface
  const [searchInput, setSearchInput] = useState('');

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Define event type
    setSearchInput(e.target.value);
  };

  const validMarkers = markersData.filter((location) => location.isValid === 'TRUE');

  console.log(validMarkers);
  const filteredMarkers = validMarkers.filter((location) =>
    location.name.toLowerCase().includes(searchInput.toLowerCase()),
  );

  function trimAndEllipsis(str: string) {
    if (str.length > 20) {
      return str.substring(0, 25) + '...';
    } else {
      return str;
    }
  }

  return (
    <div className="flex flex-col w-full lg:w-80 gap-2 px-4  justify-center ">
      <SearchBar handleSearchInput={handleSearchInput} />
      {filteredMarkers.map((location) => (
        <div
          key={location.id}
          className="py-4 bg-white rounded-lg p-5 hover:shadow-lg border-2 hover:border-gray-500 relative"
          onClick={() => {
            handleActiveMarker(location.id);
          }}
        >
          {/* <div className="absolute top-2 right-2 z-10">{location.id % 2 !== 0 && <CardTags title="Top Rated" />}</div> */}
          <p className="text-xl">{location.name}</p>
          {location.desc !== '-' && <p className="text-sm">{trimAndEllipsis(location.desc)}</p>}
          <p className="text-sm">{trimAndEllipsis(location.address)}</p>
          {/* <p className="py-2 text-yellow-500 flex gap-1">
            {Array.from({ length: location.rating }).map((_, index) => (
              <FaStar key={index} />
            ))}
          </p> */}
          <Link href={'tel:+917073232505'}>
            <p className="underline text-sm">Ph: {location.phone}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ShopCard;
