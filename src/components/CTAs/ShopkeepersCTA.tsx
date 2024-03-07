import Link from 'next/link';
import React from 'react';
import Button from '../shared/Buttons/Button';
import { HomePageCTAProps } from '@/shared/types';

const ShopkeepersCTA = (props: HomePageCTAProps) => {
  return (
    <section className={`overflow-hidden bg-[url('/cta-banner-3.jpg')] bg-cover  bg-center bg-no-repeat `}>
      <div className="bg-black/60 px-20 py-36 md:p-12 lg:px-16 lg:py-40 flex w-full justify-center">
        <div className="text-center sm:text-left max-w-screen-xl  w-full">
          <h3 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">{props.title}</h3>

          <p className="hidden max-w-3xl text-white/90 md:mt-6 md:block md:text-base md:leading-relaxed">
            {props.desc}
          </p>

          <div className="mt-4 sm:mt-8">
            <Link href="/register-your-business">
              <Button className="btn-primary">Know More</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopkeepersCTA;
