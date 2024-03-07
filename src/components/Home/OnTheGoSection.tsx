import React from 'react';
import MediaRecognition from '../shared/MediaRecognition/MediaRecognition';
import Image from 'next/image';
import Button from '../shared/Buttons/Button';

const OnTheGoSection = ({ type }: { type: string }) => {
  return (
    <div
      className={` flex justify-center ${
        type === 'dark' ? 'bg-mkd-dark text-mkd-light' : 'bg-mkd-light text-mkd-dark'
      }`}
    >
      <div className="max-w-screen-xl  w-full py-10">
        {/* info */}
        <div className="flex flex-col lg:flex-row w-full ">
          {/* left */}
          <div className="w-full lg:w-1/2 bg-green-4d00 h-min flex flex-col px-12 py-10 justify-center">
            <h5 className="text-4xl py-4">Revolutionizing mobile accessories market</h5>
            <p className="text-base pb-6 text-justify">
              The mobile accessories market in India is largely unorganized and disjointed. Customers struggle with
              finding the right fit and quality for their smartphones while making a purchase. We at Mobile ki Dukan are
              revolutionizing this through technology-enabled on-wheel shops. Now mobilize your own mobile accessories
              outlet with our e-cart vehicle rentals.
            </p>

            <p className="text-base pb-6 text-justify">
              We aim to bring structure to a fragmented industry and improve customer experience with our all-in-one
              eco-system which integrates demand mapping, inventory stacks customization. Logistics tie ups and omni-
              channel enablement. Our partners focus purely on sales and services while we harmonize everything in the
              background.
            </p>
          </div>
          {/* right */}
          <div className="w-full lg:w-1/2  bg-yellow-30d0  flex justify-center items-end">
            <Image src={'/cart.png'} alt={'something'} className=" object-contain" width={800} height={200} />
          </div>
        </div>

        <div className="m-4">
          <MediaRecognition type={'media'} />
        </div>
      </div>
    </div>
  );
};

export default OnTheGoSection;
