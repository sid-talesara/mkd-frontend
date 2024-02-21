import Image from 'next/image';
import Link from 'next/link';
import CardTags from './CardTags';
import { FaStar, FaLocationDot } from 'react-icons/fa6';
import { ShopCardsProps } from '@/shared/types';
import { MdHandshake } from 'react-icons/md';
type Props = {};

const FeatureCard = (props: Props) => {
  return (
    <div className="min-w-64 w-fit bg-mkd-light flex flex-col justify-center items-center h-fit rounded-lg relative m-1 max-w-72 overflow-hidden p-5 hover:shadow-lg border-2  transition-all duration-300 my-0 md:my-6">
      <div className="bg-mkd-accent/15 rounded-lg p-2">
        <MdHandshake className="text-mkd-primary text-5xl" />
      </div>

      <p className="text-xl py-2 font-semibold text-center">User Friendly</p>
      <p className="text-sm  py-1 text-center">Contact Now Some random text that is not more than this length.</p>
    </div>
  );
};

export default FeatureCard;
