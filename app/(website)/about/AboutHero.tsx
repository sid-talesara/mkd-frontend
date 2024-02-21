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
              <h5 className="text-2xl py-4">Some really fancy heading that is eye catchy</h5>
              <p className="text-base pb-6 text-justify">
                Some really fancy heading that is eye catchySome really fancy heading that is eye catchySome really
                fancy heading that is eye catchySome really fancy heading that is eye catchySome really fancy heading
                that is eye catchySome really fancy heading that is eye catchy
              </p>
              <p className="text-base pb-6 text-justify">
                Some really fancy heading that is eye catchySome really fancy heading that is eye catchySome really
                fancy heading that is eye catchySome really fancy heading that is eye catchySome really fancy heading
                that is eye catchySome really fancy heading that is eye catchy
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
