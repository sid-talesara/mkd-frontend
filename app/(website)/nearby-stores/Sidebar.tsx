import React, { FC } from 'react';
import ShopCard from './ShopCard';

interface SidebarProps {
  handleActiveMarker: (markerId: number) => void; // Define the type for handleActiveMarker
}

const Sidebar: FC<SidebarProps> = ({ handleActiveMarker }) => {
  return (
    <div className="w-full lg:w-96 bg-mkd-light h-96 lg:h-screen overflow-y-auto z-20">
      <div>
        <ShopCard handleActiveMarker={handleActiveMarker} />
      </div>
    </div>
  );
};

export default Sidebar;
