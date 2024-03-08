import React, { FC } from 'react';
import ShopCard from './ShopCard';
import { Marker } from '@/shared/types';
interface SidebarProps {
  handleActiveMarker: (markerId: string) => void; // Define the type for handleActiveMarker
  markersData: Marker[];
}

const Sidebar: FC<SidebarProps> = ({ handleActiveMarker, markersData }) => {
  return (
    <div className="w-full lg:w-96 bg-mkd-light h-96 lg:h-screen overflow-y-auto z-20">
      <div>
        <ShopCard handleActiveMarker={handleActiveMarker} markersData={markersData} />
      </div>
    </div>
  );
};

export default Sidebar;
