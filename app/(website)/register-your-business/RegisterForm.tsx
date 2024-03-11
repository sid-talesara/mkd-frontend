'use client';
import React, { useState, useRef } from 'react';
import axios from 'axios';
import { formatDate } from '@/utils/FormatDate';
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import Loader from '@/components/shared/Loader';
import { LoadScript, StandaloneSearchBox } from '@react-google-maps/api';
const RegisterForm = () => {
  const [name, setName] = useState('');
  const [shopName, setShopName] = useState('');
  const [gstNum, setGstNum] = useState('');
  const [shopLocation, setShopLocation] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [shopAddress, setShopAddress] = useState('');
  const [desc, setDesc] = useState('');
  const [showLoader, setShowLoader] = useState(false);
  const [coordinatesData, setCoordinatesData] = useState({ lat: '', lng: '' });
  const [userRating, setUserRating] = useState('');
  const inputRef = useRef<any>();

  const handlePlaceChanged = () => {
    const [place] = inputRef.current.getPlaces();
    if (place) {
      setShopAddress(place.formatted_address);
      setShopName(place.name);
      const lat = place.geometry.location.lat();
      const lng = place.geometry.location.lng();
      setCoordinatesData({ lat, lng });
    }
  };

  const handleSubmit = async () => {
    try {
      setShowLoader(true);
      const date = new Date();

      const jsonData = {
        id: uuidv4(),
        name: name || 'Computer Generated',
        shop: shopName,
        address: shopAddress,
        desc: desc,
        shopLocation: shopLocation || 'Computer Generated',
        lat: coordinatesData?.lat,
        lng: coordinatesData?.lng,
        gstNum: gstNum,
        email: email,
        phone: phone,
        // message: message,
        contacted: 'not-contacted',
        isValid: false,
        date: formatDate(date.toISOString()),
      };
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_SHEETSON_URL}/v2/sheets/${process.env.NEXT_PUBLIC_SHEETNAME_2}`,
        jsonData,
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_SHEETSON_API_KEY}`,
            'X-Spreadsheet-Id': `${process.env.NEXT_PUBLIC_SHEETID}`,
            'Content-Type': 'application/json',
          },
        },
      );
      if (res.status === 201) {
        setEmail('');
        // setMessage('');
        setName('');
        setPhone('');
        setDesc('');
        setShopAddress('');
        setPhone('');
        setGstNum('');
        setShopLocation('');
        setShopName('');
      }
      toast.success('Form submitted successfully', {
        position: 'top-center',
      });
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
            <span className="font-bold">REGISTER </span>
            YOUR BUSINESS
          </h3>

          {/* <StandaloneSearchBox /> */}
          {/* <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Register Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, voluptas?
          </p> */}
          {/* <div className="h-[60vh] flex justify-center items-center">
            <Loader />
          </div> */}

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

            {/* GST Number */}
            <div>
              <label htmlFor="gst" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                GST Number
                <span> *</span>
              </label>
              <input
                type="text"
                id="gst"
                value={gstNum}
                onChange={(e) => setGstNum(e.target.value)}
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="08AAAAA0000A1Z5"
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

            <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''} libraries={['places']}>
              <StandaloneSearchBox onLoad={(ref) => (inputRef.current = ref)} onPlacesChanged={handlePlaceChanged}>
                {/* Shop Name */}
                <div>
                  <label htmlFor="place" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Place
                    <span> *</span>
                  </label>
                  <input
                    type="text"
                    id="place"
                    // value={shopName}
                    // onChange={(e) => setShopName(e.target.value)}
                    className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="Shop Name"
                  />
                </div>
              </StandaloneSearchBox>
            </LoadScript>

            {/* Shop Description */}
            <div>
              <label htmlFor="shopdesc" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Shop Description
                <span> *</span>
              </label>
              <input
                type="text"
                id="shopdesc"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="About shop "
                required
              />
            </div>

            {/* message
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
            </div> */}
          </form>

          <button
            onClick={handleSubmit}
            className="py-3 flex gap-4 my-4 items-center px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            SEND MESSAGE {showLoader && <Loader />}
          </button>
        </div>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </section>
    </div>
  );
};

export default RegisterForm;
