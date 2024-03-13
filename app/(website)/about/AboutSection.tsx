import React from 'react';
import Image from 'next/image';
import MediaRecognition from '@/components/shared/MediaRecognition/MediaRecognition';

const AboutSection = ({ type }: { type: string }) => {
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
            <h3 className="text-2xl font-light ">
              <span className="font-bold">FOUNDER’S </span>
              TALK
            </h3>
            <h5 className="text-4xl py-4">Join Mobile ki Dukan to be the next-generation shop.</h5>
            <p className="text-base pb-6 text-justify">
              I envisioned building a platform optimizing the reach already created by mobile store owners through
              supplemental digital discovery. I want to uplift mobile shop owners without changing thier identity so
              they can proudly say &nbsp;
              <span className="font-semibold">#meridukanmeripahchan</span>&nbsp; and in parallel also assists unserved
              consumer segments by profiling available seller competence as per usage needs. Launching Mobile Ki Dukan
              as a pure listings model seemed the logical first step. but traction from local retailers made us realize
              the bigger void in fragmented mobile accessories shopping. Inviting smaller entrepreneurs to set up
              inventory-taken care of movable outlets at low investments is proving a win-win.
            </p>
            <p className="text-base pb-6 text-justify">
              I feel glad Mobile Ki Dukan’s vision taking shape in addressing real challenges for Rajasthan's mobile
              ecosystem participants using practical technology intervention. But this is just the beginning as we stay
              committed to keep evolving&nbsp; innovative win-win program partnerships sustaining inclusive
              progress.&nbsp;
            </p>
          </div>
          {/* right */}
          <div className="w-full lg:w-1/2  bg-yellow-30d0  flex justify-center items-end">
            <Image src={'/founder.jpg'} alt={'something'} className=" object-contain" width={400} height={200} />
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
