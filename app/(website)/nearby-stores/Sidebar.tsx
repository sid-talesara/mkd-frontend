import React from 'react';
import ShopCard from './ShopCard';

const Sidebar = ({ handleActiveMarker }) => {
  return (
    <div className="w-96 bg-mkd-light h-screen overflow-y-auto z-20 ">
      <div>
        <ShopCard handleActiveMarker={handleActiveMarker} />
      </div>
    </div>
  );
};

export default Sidebar;
