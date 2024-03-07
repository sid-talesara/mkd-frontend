import React from 'react';
// import RegisterYourBusinessPage from './RegisterYourBusinessPage';
import { Metadata } from 'next';
import { OntheGoFAQ } from '@/shared/data';
import OnTheGoPage from './OnTheGoPage';

// for SEO
export const metadata: Metadata = {
  title: ' Start your mobile accessories business with us today – Mobile Ki Dukan',
  description:
    "Join India's first mobile accessories retail program with branded inventory stocked e-carts at low investment. Get logistics, supplies, marketing support from Mobile Ki Dukan to run your own wheels business profitably.",
  keywords: [
    'Mobile ki dukan in Jaipur',
    'Mobile Dukaan',
    'About Mobile Ki Dukan',
    'Start mobile accessories business',
    'Mobile accessories franchise',
    'mobile covers outlet',
    'Branded mobile covers outlet',
    'Inventory for mobile accessories',
    'mobile ka saman',
    'mobile ka cover',
    'screen guard for mobile',
    'E-cart for mobile business',
    'Investment for mobile shop',
  ],

  openGraph: {
    url: `https://mobilekidukan.com/start-business`,
    type: 'website',
    title: ' Start your mobile accessories business with us today – Mobile Ki Dukan',
    description:
      "Join India's first mobile accessories retail program with branded inventory stocked e-carts at low investment. Get logistics, supplies, marketing support from Mobile Ki Dukan to run your own wheels business profitably.",
    images: [
      {
        url: 'https://i.imgur.com/lKKAKKM.png',
        width: 1200,
        height: 630,
        alt: ' Start your mobile accessories business with us today – Mobile Ki Dukan',
      },
    ],
  },
};

const OnTheGo = () => {
  return (
    <div className="bg-mkd-light">
      <OnTheGoPage />
    </div>
  );
};

export default OnTheGo;
