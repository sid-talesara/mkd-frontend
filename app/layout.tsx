import type { Metadata } from 'next';
import { Work_Sans } from 'next/font/google'; // Import Work Sans font
import './globals.css';
import NavbarComponent from '@/components/shared/Navbar/Navbar';
import NavbarMobileComponent from '@/components/shared/Navbar/NavbarMobile';
import Footer from '@/components/shared/Footer/Footer';
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google';
const workSans = Work_Sans({ subsets: ['latin'] });

// for SEO
export const metadata: Metadata = {
  title: 'Top Mobile Shops Near you - Mobile Ki Dukan',
  description:
    "Mobile ki Dukan, Rajasthan's No. 1 listing Platform for mobile shop owners, retailers, and mobile accessories sellers. Find addresses, phone numbers, reviews and ratings, photos, maps of mobile shops.",
  keywords: [
    'Mobile ki dukan in Jaipur',
    'Mobile Dukaan',
    'Dukan Mobile',
    'Mobile shops in Jaipur',
    'mobile stores Jaipur',
    'mobile shops jaipur',
    'Mobile store listings Jaipur',
    'Buy mobile phones Jaipur',
    'Mobile accessories sellers Jaipur',
    'Smartphone dealers Jaipur',
    'Top mobile brands Jaipur',
  ],

  openGraph: {
    url: `https://mobilekidukan.com`,
    type: 'website',
    title: 'Find mobile shops Near You in Jaipur – Mobile Ki Dukan',
    description:
      "Mobile ki Dukan, Rajasthan's No. 1 listing Platform for mobile shop owners, retailers, and mobile accessories sellers. Find addresses, phone numbers, reviews and ratings, photos, maps of mobile shops.",
    images: [
      {
        url: 'https://i.imgur.com/QRSScwe.jpeg',
        width: 1200,
        height: 630,
        alt: 'Find mobile shops Near You in Jaipur – Mobile Ki Dukan',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={workSans.className}>
        <div className="hidden lg:block">
          <NavbarComponent />
        </div>
        <div className=" block lg:hidden">
          <NavbarMobileComponent />
        </div>

        {children}
        <Footer />
      </body>{' '}
      <GoogleTagManager gtmId="GTM-KLMDXNQ4" />
      <GoogleAnalytics gaId="G-295541412" />
    </html>
  );
}
