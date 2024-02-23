import React from 'react';
import { FaSearch } from 'react-icons/fa';
type Props = {};
const SearchBar = ({ handleSearchInput }) => {
  return (
    <div>
      {' '}
      <div className=" py-2 flex items-center gap-2 ">
        <input
          type="text"
          onChange={handleSearchInput}
          placeholder="Enter Shop Name"
          className="w-full rounded-md border border-gray-100 bg-white px-3 py-2"
        />
        <div className="bg-gray-100 p-2 rounded-md hover:bg-gray-300">
          <FaSearch className="text-xl" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
