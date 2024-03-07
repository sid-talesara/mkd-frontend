import FeaturesSection from '@/components/Home/FeaturesSection';
import FAQPage from '@/components/shared/FAQ/Faq';
import MediaRecognition from '@/components/shared/MediaRecognition/MediaRecognition';
import Testimonial from '@/components/shared/Testimonial/Testimonial';
import React from 'react';
import Image from 'next/image';
import { OnTheGoFeaturesData, OntheGoFAQ, onTheGoTestimonials } from '@/shared/data';
import OnTheGoForm from './OnTheGoForm';

const OnTheGoPage = () => {
  return (
    <div>
      {/* Register form */}

      <div className="justify-center w-full hidden lg:flex">
        <Image
          src={'/otg-banner.png'}
          width={1500}
          height={1000}
          alt="register-on-mkd"
          className="w-full object-cover"
        />
      </div>
      <div className="justify-center w-full flex lg:hidden h-[80vh]">
        <Image
          src={'/otg-banner-mobile.png'}
          width={1500}
          height={1000}
          alt="register-on-mkd"
          className="w-full object-cover"
        />
      </div>
      <OnTheGoForm />
      <FeaturesSection type={'dark'} data={OnTheGoFeaturesData} />
      <div className="pt-12">
        <MediaRecognition type="brand" />
      </div>
      <Testimonial data={onTheGoTestimonials} />
      {/* owner contact */}
      <FAQPage data={OntheGoFAQ} />
    </div>
  );
};

export default OnTheGoPage;
