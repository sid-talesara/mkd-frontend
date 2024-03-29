'use client';
import React, { useState } from 'react';
import axios from 'axios';
import { formatDate } from '@/utils/FormatDate';
import Loader from '@/components/shared/Loader';
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import Modal from '@/components/shared/Modal/Modal';
const OnTheGoPage = () => {
  const [name, setName] = useState('');
  const [shopName, setShopName] = useState('');
  const [gstNum, setGstNum] = useState('');
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
        id: uuidv4(),
        date: formatDate(date.toISOString()),
        name: name,
        shopName: shopName,
        gstNum: gstNum,
        email: email,
        phone: phone,
        message: message,
        contacted: 'not-contacted',
        isValid: false,
      };
      console.log(jsonData);
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_SHEETSON_URL}/v2/sheets/${process.env.NEXT_PUBLIC_SHEETNAME_3}`,
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
        setName('');
        setShopName('');
        setGstNum('');
        setEmail('');
        setPhone('');
        setMessage('');
      }

      setShowModal(true);
      setShowLoader(false);

      setShowLoader(false);
    } catch (error) {
      toast.error('Some error occured', {
        position: 'top-center',
      });
      console.log(error);
    }
  };

  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h3 className=" font-light  mb-4 text-4xl tracking-tight text-center text-gray-900 dark:text-white">
            <span className="font-bold">START </span>
            YOUR BUSINESS
          </h3>
          {/* <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
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

            {/* Shop Name */}
            <div>
              <label htmlFor="shopname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Shop Name
                <span> *</span>
              </label>
              <input
                type="text"
                id="shopname"
                value={shopName}
                onChange={(e) => setShopName(e.target.value)}
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Shop Name"
                required
              />
            </div>

            {/* GST Number */}
            <div>
              <label htmlFor="gst" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                GST Number
              </label>
              <input
                type="text"
                id="gst"
                value={gstNum}
                onChange={(e) => setGstNum(e.target.value)}
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="08AAAAA0000A1Z5"
              />
            </div>

            {/* Shop Location
            <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Shop Location
                <span> *</span>
              </label>
              <input
                type="text"
                id="location"
                value={shopLocation}
                onChange={(e) => setShopLocation(e.target.value)}
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Google Location Link"
                required
              />
            </div> */}

            {/* Email */}
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Your email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="name@mkd.com"
              />
            </div>

            {/* Phone  */}
            <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Phone Number
                <span> *</span>
              </label>
              <input
                type="tel"
                id="subject"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="+91-XXXXX-XXXXX"
                required
              />
            </div>

            {/* message */}
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
            className="py-3 flex gap-4 my-4 items-center px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            SEND MESSAGE {showLoader && <Loader />}
          </button>
        </div>
        <Modal showModal={showModal} setShowModal={setShowModal} />
      </section>
    </div>
  );
};

export default OnTheGoPage;
