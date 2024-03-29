import { brandsRecognition, mediaRecognition } from '@/shared/data';
import Image from 'next/image';
import React from 'react';

const MediaRecognition = ({ type }: { type: string }) => {
  return (
    <div className="flex justify-center ">
      <div className="bg-white w-full shadow-lg max-w-screen-xl px-10 py-5 rounded-lg h-auto lg:h-40 flex flex-wrap justify-evenly items-center">
        {/* brand logo */}
        {type === 'media'
          ? mediaRecognition.map((media, index) => (
              <div
                key={index}
                className="w-20 h-20 lg:w-32 lg:h-32 m-3 md:m-0  object-contain flex justify-center items-center  bg-white"
              >
                <Image src={media.src} alt={media.altText} width={1000} height={1000} />
              </div>
            ))
          : brandsRecognition.map((brand, index) => (
              <div
                key={index}
                className="w-16 h-16 lg:w-32 lg:h-32 object-contain flex justify-center items-center bg-white"
              >
                <Image src={brand.src} alt="" width={1000} height={1000} />
              </div>
            ))}
      </div>
    </div>
  );
};

export default MediaRecognition;
