import React from 'react';
import MediaRecognition from '../shared/MediaRecognition/MediaRecognition';
import Image from 'next/image';
import Button from '../shared/Buttons/Button';

type Props = {};

const AboutSection = (props: Props) => {
  return (
    <div className="bg-mkd-dark text-mkd-light flex justify-center">
      <div className="max-w-screen-xl  w-full py-10">
        {/* info */}
        <div className="flex flex-col lg:flex-row w-full ">
          {/* left */}
          <div className="w-full lg:w-1/2 bg-green-4d00 h-min flex flex-col px-12 py-10 justify-center">
            <h3 className="text-2xl font-light ">
              <span className="font-bold">ABOUT </span>
              MOBILE KI DUKAN
            </h3>
            <h5 className="text-4xl py-4">Some really fancy heading that is eye catchy</h5>
            <p className="text-base pb-6 text-justify">
              Some really fancy heading that is eye catchySome really fancy heading that is eye catchySome really fancy
              heading that is eye catchySome really fancy heading that is eye catchySome really fancy heading that is
              eye catchySome really fancy heading that is eye catchy
            </p>
            <Button className="btn-primary">Register Your Business</Button>
          </div>
          {/* right */}
          <div className="w-full lg:w-1/2  bg-yellow-30d0  flex justify-center items-end">
            <Image src={'/cart.png'} alt={'something'} className=" object-contain" width={500} height={200} />
          </div>
        </div>

        <div className="m-4">
          <MediaRecognition type={'media'} />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
