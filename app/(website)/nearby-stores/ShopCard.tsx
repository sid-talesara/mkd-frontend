import CardTags from '@/components/shared/Cards/CardTags';
import { markersLocation } from '@/shared/data';
import Link from 'next/link';
import React from 'react';
import { FaStar } from 'react-icons/fa';
import SearchBar from './SearchBar';
type Props = {};

const ShopCard = ({ handleActiveMarker }) => {
  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
  };

  const filteredMarkers = markersLocation.filter((location) =>
    location.name.toLowerCase().includes(searchInput.toLowerCase()),
  );
  return (
    <div className="flex flex-col w-80 gap-2 px-4  justify-center ">
      <SearchBar handleSearchInput={handleSearchInput} />
      {filteredMarkers.map((location, index) => (
        <div
          key={location.id}
          className="py-4 bg-white rounded-lg p-5 hover:shadow-lg border-2 hover:border-gray-500 relative"
          onClick={() => {
            handleActiveMarker(location.id);
          }}
        >
          <div className="absolute top-2 right-2 z-10">{location.id % 2 !== 0 && <CardTags title="Top Rated" />}</div>
          <p className="text-xl">{location.name}</p>
          <p className="text-sm">"15/ inside udaipol gate, Near hotel royal palm, Jaipur - 302033."</p>
          <p className="py-2 text-yellow-500 flex gap-1">
            <FaStar />
            <FaStar /> <FaStar /> <FaStar /> <FaStar />
          </p>
          <Link href={'tel:+917073232505'}>
            <p className="underline text-sm">Ph: +91-98988-09989</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ShopCard;
