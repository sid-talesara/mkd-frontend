import React from 'react';
import FeatureCard from '../shared/Cards/FeatureCard';
import { ShopCardDummyData } from '@/shared/data';

type Props = {};

const FeaturesSection = (props: Props) => {
  return (
    <div>
      {' '}
      <div className="flex flex-col items-center justify-center gap-5 py-8 px-5">
        <h3 className="text-4xl font-light ">
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
