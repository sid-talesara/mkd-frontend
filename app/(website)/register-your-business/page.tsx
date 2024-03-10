import React from 'react';
import RegisterYourBusinessPage from './RegisterYourBusinessPage';
import { Metadata } from 'next';

// for SEO
export const metadata: Metadata = {
  title: ' List your mobile store with us – Mobile Ki Dukan',
  description:
    "Take your mobile ki dukan online with us. Get discovered by 1000s of nearby buyers searching for mobile phones, accessories and repair services. Joining Mobile Ki Dukan instantly increases your store's visibility, credibility and trust among local customers.",
  keywords: [
    'Mobile ki dukan in Jaipur',
    'Mobile Dukaan',
    'About Mobile Ki Dukan',
    'mobile listing',
    'mobile store registration',
    'mobile shop registration',
    'mobile store directory',
    'listing platform',
    'mobile shop listing',
    'mobile phone customer',
    'mobile ka customer',
  ],

  openGraph: {
    url: `https://mobilekidukan.com/register-your-business`,
    type: 'website',
    title: ' List your mobile store with us – Mobile Ki Dukan',
    description:
      "Take your mobile ki dukan online with us. Get discovered by 1000s of nearby buyers searching for mobile phones, accessories and repair services. Joining Mobile Ki Dukan instantly increases your store's visibility, credibility and trust among local customers.",
    images: [
      {
        url: 'https://i.imgur.com/NMaenI4.png',
        width: 1200,
        height: 630,
        alt: ' List your mobile store with us – Mobile Ki Dukan',
      },
    ],
  },
};

const RegisterYourBusiness = () => {
  return (
    <div className="bg-mkd-light">
      <RegisterYourBusinessPage />
    </div>
  );
};

export default RegisterYourBusiness;
