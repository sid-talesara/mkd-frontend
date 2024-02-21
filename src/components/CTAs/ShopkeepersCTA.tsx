import Link from 'next/link';
import React from 'react';
import Button from '../shared/Buttons/Button';

type Props = {};

const ShopkeepersCTA = (props: Props) => {
  return (
    <section className="overflow-hidden bg-[url(/cta-banner-4.jpg)] bg-cover  bg-center bg-no-repeat ">
      <div className="bg-black/40 px-20 py-36 md:p-12 lg:px-16 lg:py-40 flex w-full justify-center">
        <div className="text-center sm:text-left max-w-screen-xl  w-full">
          <h3 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">Tired of digital confusion?🤔</h3>

          <p className="hidden max-w-3xl text-white/90 md:mt-6 md:block md:text-base md:leading-relaxed">
            Jaipur's best marketing and development agency is here to guide you to simplicity! Whether it's SEO
            headaches, content confusion, or social media chaos, we're here to ease the stress. Say goodbye to digital
            struggles and hello to a smoother online journey. Click now to tackle the challenges, boost engagement, and
            start a hassle-free digital adventure with Markals!"
          </p>

          <div className="mt-4 sm:mt-8">
            <Link href="/">
              <Button className="btn-primary">Register Your Business</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopkeepersCTA;
