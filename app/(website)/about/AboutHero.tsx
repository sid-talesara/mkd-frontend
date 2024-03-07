import Button from '@/components/shared/Buttons/Button';
import Image from 'next/image';
import React from 'react';

type Props = {};

const AboutHero = (props: Props) => {
  return (
    <div>
      <div className=" text-mkd-dark flex justify-center">
        <div className="max-w-screen-xl  w-full py-0 md:py-8">
          {/* info */}
          <div className="flex flex-col lg:flex-row w-full ">
            {/* left */}
            <div className="w-full lg:w-1/2 bg-green-4d00 h-min flex flex-col px-12 py-10 justify-center">
              <h3 className="text-4xl font-light py-8">
                <span className="font-bold">ABOUT </span>
                MOBILE KI DUKAN
              </h3>
              <h5 className="text-2xl py-4 font-semibold">India's fastest-growing next generation mobile Shops.</h5>
              <p className="text-base pb-6 text-justify">
                Mobile Ki Dukan, founded in 2019 is Jaipur, Rajasthan's premier next-generation mobile shop, devoted
                solely to mobile shop owners in India offering to extend their reach and enhance walk-in traffic.
              </p>
              <p className="text-base pb-6 text-justify">
                In less than four years, we have helped over 100 mobile stores in key locations and enhanced their
                online presence among relevant smartphone customers, establishing us as the premier mobile seller
                platform.
              </p>
              <p className="text-base pb-6 text-justify">
                <span className="font-bold">Our Mission : Meri Dukan Meri Pahchan</span>
                <br />
                We aim to leverage the digital medium optimally, to enable easy discovery between trusted neighborhood
                mobile ki dukan options and the right customers living nearby through transparent listings. And we do
                all this without mandating any changes to your brand identity, philosophy or operating vision. Join the
                #MeriDukanMeriPahchan movement to become a #NextGenerationShop
              </p>
            </div>
            {/* right */}
            <div className="w-full lg:w-1/2  bg-yellow-30d0  flex justify-center px-4 md:p-0 ">
              <Image src={'/about-hero.png'} alt={'something'} className=" object-contain " width={500} height={200} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
