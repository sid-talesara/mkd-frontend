import FeaturedShops from '@/components/Home/FeaturedShops';
import FAQPage from '@/components/shared/FAQ/Faq';
import FeaturesSection from '@/components/Home/FeaturesSection';
import Testimonial from '@/components/shared/Testimonial/Testimonial';
import React from 'react';
import Carousal from './Carousal';
import ShopkeepersCTA from '@/components/CTAs/ShopkeepersCTA';
import AboutSection from '@/components/Home/AboutSection';

const Homepage = () => {
  return (
    <div className="">
      <Carousal />
      <FeaturedShops />
      <FeaturesSection type={'light'} />
      <AboutSection type={'dark'} />

      <Testimonial />
      <ShopkeepersCTA />
      <FAQPage />
    </div>
  );
};

export default Homepage;
