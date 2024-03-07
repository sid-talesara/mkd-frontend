import ShopkeepersCTA from '@/components/CTAs/ShopkeepersCTA';
import React from 'react';
import AboutHero from './AboutHero';
import { AboutPageCTA } from '@/shared/data';
import AboutSection from './AboutSection';

type Props = {};

const AboutUsPage = (props: Props) => {
  return (
    <div>
      <div className="py-5">
        <AboutHero />
      </div>
      {/* <FeaturesSection type={'dark'} /> */}
      <ShopkeepersCTA {...AboutPageCTA} />

      <AboutSection type={'light'} />
    </div>
  );
};

export default AboutUsPage;
