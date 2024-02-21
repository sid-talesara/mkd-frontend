import FeaturesSection from '@/components/Home/FeaturesSection';
import FAQPage from '@/components/shared/FAQ/Faq';
import MediaRecognition from '@/components/shared/MediaRecognition/MediaRecognition';
import Testimonial from '@/components/shared/Testimonial/Testimonial';
import React from 'react';
import RegisterForm from './RegisterForm';
import Image from 'next/image';

type Props = {};

const RegisterYourBusinessPage = (props: Props) => {
  return (
    <div>
      {/* Register form */}

      <div className="justify-center w-full hidden lg:flex">
        <Image
          src={'/register-banner.png'}
          width={1500}
          height={1000}
          alt="register-on-mkd"
          className="w-full object-cover"
        />
      </div>
      <div className="justify-center w-full flex lg:hidden h-[80vh]">
        <Image
          src={'/register-banner-mobile.png'}
          width={1500}
          height={1000}
          alt="register-on-mkd"
          className="w-full object-cover"
        />
      </div>
      <RegisterForm />
      <FeaturesSection type="dark" />
      <div className="pt-12">
        <MediaRecognition type="brand" />
      </div>
      <Testimonial />
      {/* owner contact */}
      <FAQPage />
    </div>
  );
};

export default RegisterYourBusinessPage;
