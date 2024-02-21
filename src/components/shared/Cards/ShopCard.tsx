import Image from 'next/image';
import Link from 'next/link';
import CardTags from './CardTags';
import { FaStar, FaLocationDot } from 'react-icons/fa6';
import { ShopCardsProps } from '@/shared/types';

const ShopCard = (props: ShopCardsProps) => {
  return (
    <div className="min-w-64 w-fit bg-mkd-light   rounded-xl relative m-1 mb-6 border-2 hover:border-gray-500  max-w-96 overflow-hidden hover:shadow-lg transition-all duration-300">
      {/* tags */}
      <div className="absolute top-2 right-2 z-10">
        <CardTags title="Top Rated" />
      </div>
      {/* image */}
      <div className="overflow-hidden flex flex-col  justify-center relative">
        <Image src={'/shop.png'} width={1000} height={1000} alt="shop-image" />
      </div>

      {/* info */}
      <div className="p-5">
        <p className="text-lg py-2 underline">Rajesh Mobiles, Jagatpura</p>
        <div className="flex gap-2 items-center py-1 pt-0 text-xs">
          <p className="location flex items-center gap-1">
            {' '}
            <FaLocationDot /> Sector-5 Pratap...
          </p>
          <div className="flex gap-2 items-center">
            <p className="bg-green-600 text-mkd-light px-2 py-1 rounded-md text-xs   flex items-center gap-1">
              5.0 <FaStar />
            </p>
            <p>265 Rating</p>
          </div>
        </div>
        <p className="text-xs py-1">
          Contact Now
          <Link href="tel:+919998887776" className="underline hover:font-medium">
            {' '}
            +91-9998887776
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ShopCard;
