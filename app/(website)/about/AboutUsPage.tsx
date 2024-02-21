import ShopkeepersCTA from '@/components/CTAs/ShopkeepersCTA';
import AboutSection from '@/components/Home/AboutSection';
import FeaturesSection from '@/components/Home/FeaturesSection';
import React from 'react';
import AboutHero from './AboutHero';

type Props = {};

const AboutUsPage = (props: Props) => {
  return (
    <div>
      <AboutHero />
      <FeaturesSection type={'dark'} />
      <AboutSection type={'light'} />
      <ShopkeepersCTA />
    </div>
  );
};

export default AboutUsPage;
