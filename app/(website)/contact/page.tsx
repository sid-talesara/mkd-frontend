'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import axios from 'axios';
import { formatDate } from '@/utils/FormatDate';
import { toast } from 'react-toastify';
import Loader from '@/components/shared/Loader';
import Modal from '@/components/shared/Modal/Modal';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [showLoader, setShowLoader] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async () => {
    try {
      setShowLoader(true);
      const date = new Date();
      const jsonData = {
        name: name,
        email: email,
        phone: phone,
        message: message,
        contacted: 'not-contacted',
        date: formatDate(date.toISOString()),
      };
      console.log(jsonData);
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_SHEETSON_URL}/v2/sheets/${process.env.NEXT_PUBLIC_SHEETNAME_1}`,
        jsonData,
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_SHEETSON_API_KEY}`,
            'X-Spreadsheet-Id': `${process.env.NEXT_PUBLIC_SHEETID}`,
            'Content-Type': 'application/json',
          },
        },
      );

      console.log(res);

      if (res.status === 201) {
        setEmail('');
        setMessage('');
        setName('');
        setPhone('');
      }

      setShowModal(true);
      setShowLoader(false);

      toast.success('Form submitted successfully', {
        position: 'top-center',
      });
      // Send query on whatsapp
      // const whatsappUrl = `https://api.whatsapp.com/send?phone=917340340679&text=Hello%20Markals%2C%0A${encodeURIComponent(
      //   `I am ${name} and I am looking for an agency to build my website.\nInfo about the website:\n\nMy Details\nEmail: ${email}\nPhone: ${phone}\n\nService Needed: ${service}\n\nAdditional Message: ${message}`,
      // )}`;
      // window.open(whatsappUrl, '_blank');
    } catch (error) {
      console.log(error);
      toast.error('Some error occured', {
        position: 'top-center',
      });
      console.log(error);
      setShowLoader(false);
    }
  };

  return (
    <div className="flex flex-col-reverse justify-center lg:flex lg:flex-row items-center ">
      {/* left */}
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md w-full md:w-1/2">
        <h3 className=" font-light  mb-4 text-4xl tracking-tight  text-gray-900 dark:text-white">
          <span className="font-bold">CONTACT </span>
          US
        </h3>
        {/* <p className="mb-8 lg:mb-16 font-light  text-gray-500 dark:text-gray-400 sm:text-xl">
          Register Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, voluptas?
        </p> */}
        <form className="space-y-8">
          {/* name */}
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Name
              <span> *</span>
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Suraj Kumar"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Your email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="name@mkd.com"
            />
          </div>

          {/* Phone  */}
          <div>
            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Phone Number
              <span> *</span>
            </label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="+91-XXXXX-XXXXX"
              required
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
              Your message
            </label>
            <textarea
              id="message"
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
        </form>
        <button
          onClick={handleSubmit}
          className="mt-5 py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          SEND MESSAGE {showLoader && <Loader />}
        </button>
      </div>
      {/* right */}
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <Image src={'/about-hero.png'} alt={'something'} className=" object-cover " width={500} height={200} />
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default ContactPage;
