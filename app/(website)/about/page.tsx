import React from 'react';
import AboutUsPage from './AboutUsPage';
import { Metadata } from 'next';

type Props = {};
// for SEO
export const metadata: Metadata = {
  title: ' About Mobile Ki Dukan – A platform for Finding Mobile Stores in Jaipur',
  description:
    "Mobile Ki Dukan is a next generation shop founded in 2019 to facilitate easier discovery and transactions between Jaipur's mobile buyers and genuine neighborhood mobile stores through curated listings.",
  keywords: [
    'Mobile ki dukan in Jaipur',
    'Mobile Dukaan',
    'About Mobile Ki Dukan',
    'Mobile Ki',
    'Mobile Ki Dukan company',
    'Mobile Ki Dukan founder',
    'Meri dukan meri pehchaan',
  ],

  openGraph: {
    url: `https://mobilekidukan.com/about`,
    type: 'website',
    title: ' About Mobile Ki Dukan – A platform for Finding Mobile Stores in Jaipur',
    description:
      "Mobile Ki Dukan is a next generation shop founded in 2019 to facilitate easier discovery and transactions between Jaipur's mobile buyers and genuine neighborhood mobile stores through curated listings.",
    images: [
      {
        url: 'https://i.imgur.com/DnUNwmr.png',
        width: 1200,
        height: 630,
        alt: ' About Mobile Ki Dukan – A platform for Finding Mobile Stores in Jaipur',
      },
    ],
  },
};
const AboutUs = (props: Props) => {
  return (
    <div>
      <AboutUsPage />
    </div>
  );
};

export default AboutUs;
