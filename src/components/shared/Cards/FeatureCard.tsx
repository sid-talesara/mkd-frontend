import Image from 'next/image';
import Link from 'next/link';
import CardTags from './CardTags';
import { FaStar, FaLocationDot } from 'react-icons/fa6';
import { ShopCardsProps } from '@/shared/types';
import { MdHandshake } from 'react-icons/md';
import { FeatureCardProps } from '@/shared/types';

const FeatureCard = (props: FeatureCardProps) => {
  const Icon = props.icon;
  return (
    <div className="min-w-64  w-fit bg-mkd-light flex flex-col justify-center items-center h-60 rounded-lg relative m-1 max-w-72 overflow-hidden p-5 hover:shadow-lg border-2  transition-all duration-300 my-0 md:my-6">
      <div className="bg-mkd-accent/15 rounded-lg p-4 m-2">
        <Icon className="text-mkd-primary text-3xl" />
        {/* className="text-mkd-primary text-5xl" /> */}
      </div>

      <p className="text-xl py-2 font-semibold text-center">{props.title}</p>
      <p className="text-sm  py-1 text-center">{props.desc}</p>
    </div>
  );
};

export default FeatureCard;
