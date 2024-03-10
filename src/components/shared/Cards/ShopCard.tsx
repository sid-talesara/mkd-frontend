import Image from 'next/image';
import Link from 'next/link';
import CardTags from './CardTags';
import { FaStar, FaLocationDot } from 'react-icons/fa6';
import { ShopCardsProps } from '@/shared/types';

const ShopCard = ({ shop }: { shop: ShopCardsProps }) => {
  const { address, avgRating, coverImg, phone, ratingNum, shopLocation } = shop;

  function trimAndEllipsis(str: string) {
    if (str.length > 20) {
      return str.substring(0, 15) + '...';
    } else {
      return str;
    }
  }

  const transformedAddress = trimAndEllipsis(address);

  return (
    <Link href={shopLocation} target="_blank">
      <div className="min-w-64 w-fit   rounded-xl relative m-1 mb-6 border-2 hover:border-gray-500  max-w-96 overflow-hidden hover:shadow-lg transition-all duration-300">
        {/* tags */}
        <div className="absolute top-2 right-2 z-10">
          <CardTags title="Top Rated" />
        </div>
        {/* image */}
        <div className="overflow-hidden flex flex-col  justify-center relative min-h-44">
          <img src={coverImg} alt="shop-image " className="w-96 object-cover h-56 " />
        </div>

        {/* info */}
        <div className="p-5 text-left">
          <p className="text-lg py-2 underline">{shop.shop}</p>
          <div className="flex gap-2 items-center py-1 pt-0 text-xs">
            <p className="location flex items-center gap-1">
              {' '}
              <FaLocationDot />
              {transformedAddress}
            </p>
            <div className="flex gap-2 items-center">
              <p className="bg-green-600 text-mkd-light px-2 py-1 rounded-md text-xs   flex items-center gap-1">
                {avgRating} <FaStar />
              </p>
              <p>{ratingNum} Rating</p>
            </div>
          </div>
          <p className="text-xs py-1">
            Contact Now
            <Link href={`tel:${phone}`} className="underline hover:font-medium">
              {' '}
              {phone}
            </Link>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ShopCard;
