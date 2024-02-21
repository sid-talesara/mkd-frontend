'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { GeneralFaqQuestions } from '@/shared/data';

const FAQPage = () => {
  const [toggle, setToggle] = useState(0);
  const toggleContent = (index: number) => {
    setToggle(index);
  };

  return (
    <section className="  py-8  md:py-10  ">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-screen-lg flex flex-col gap-10">
        {/* Heading */}
        <h3 className="text-4xl font-light lg:text-center ">
          HAVE
          <span className="font-bold"> QUESTIONS? </span>
        </h3>

        <div>
          {/* FAQs */}
          {GeneralFaqQuestions.map((item, index) => (
            <div
              key={item.id}
              className={`transition-all duration-200 py-2 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50 ${
                toggle === item.id ? 'open' : ''
              }`}
            >
              <button
                type="button"
                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                onClick={() => toggleContent(index)}
              >
                <span className="flex text-base md:text-lg font-semibold text-black text-left">{item.question}</span>

                <svg
                  className={`w-6 h-6 text-gray-400 ${toggle === item.id ? 'rotate-180' : ''}`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div
                className={`${
                  toggle === index ? '' : 'hidden'
                } text-sm md:text-base px-4 pb-5 sm:px-6 sm:pb-6 text-left`}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}

          {/* lower bottom */}
          <p className="text-center text-gray-600 textbase mt-9">
            Didn’t find the answer you are looking for?{' '}
            <Link
              href="/contact"
              title=""
              className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline"
            >
              Contact our support
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQPage;
