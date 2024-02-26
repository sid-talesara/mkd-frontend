import React from 'react';

const CategoriesNavbar = () => {
  return (
    <div className="bg-gray-300">
      <div className="max-w-screen-xl mx-auto px-12">
        <div className="overflow-x-auto scrollbar">
          <ul className="text-lg flex gap-16 justify-start lg:justify-center w-full py-5 uppercase whitespace-nowrap">
            <li className="font-semibold border-b-2 border-mkd-accent">All Categories</li>
            <li className="hover:border-b-2 border-mkd-accent">Technology</li>
            <li className="hover:border-b-2 border-mkd-accent">Market</li>
            <li className="hover:border-b-2 border-mkd-accent">E-commerce</li>
            <li className="hover:border-b-2 border-mkd-accent">Latest Phones</li>
            <li className="hover:border-b-2 border-mkd-accent">Phone Tricks &amp; Tips</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CategoriesNavbar;
