import React from 'react';
import FeatureCard from '../shared/Cards/FeatureCard';
import { ShopCardDummyData } from '@/shared/data';

const FeaturesSection = ({ type }: { type: string }) => {
  return (
    <div>
      {' '}
      <div
        className={`flex flex-col items-center justify-center gap-5  px-5 ${type === 'dark' ? 'bg-mkd-dark py-8' : ''}`}
      >
        <h3 className={`text-4xl font-light  ${type === 'dark' ? 'text-mkd-light' : ''}`}>
          {/* MOBILE KI DUKAN? */}
          WHY
          <span className="font-bold"> MOBILE KI DUKAN? </span>
        </h3>
        <div className="max-w-screen-xl flex  flex-wrap gap-5 justify-center  w-full">
          {ShopCardDummyData.map((shop, index) => (
            <FeatureCard />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
