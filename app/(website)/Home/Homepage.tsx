import FeaturedShops from '@/components/Home/FeaturedShops';
import FeaturesSection from '@/components/Home/FeaturesSection';
import OnTheGoSection from '@/components/Home/OnTheGoSection';
import FAQPage from '@/components/shared/FAQ/Faq';
import Testimonial from '@/components/shared/Testimonial/Testimonial';
import Carousal from './Carousal';
import ShopkeepersCTA from '@/components/CTAs/ShopkeepersCTA';
import {
  GeneralFaqQuestions,
  HomePageCTA,
  HomeTestimonialData,
  HomepageFeaturesData,
  RegisterBusinessFAQ,
} from '@/shared/data';

const Homepage = () => {
  return (
    <div className="">
      <Carousal />
      {/* highlight shops */}
      <FeaturedShops />
      {/* benefits */}
      <FeaturesSection type={'light'} data={HomepageFeaturesData} />
      {/* on the go cta */}
      <OnTheGoSection type={'dark'} />
      {/* testimonials */}
      <Testimonial data={HomeTestimonialData} />
      {/* shopkeeper cta */}
      <ShopkeepersCTA {...HomePageCTA} />
      {/* faq's */}
      <FAQPage data={GeneralFaqQuestions} />
    </div>
  );
};

export default Homepage;
