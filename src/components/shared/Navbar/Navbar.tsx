'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdStorefront, MdWorkOutline, MdOutlineMessage } from 'react-icons/md';
import { GoHome } from 'react-icons/go';
import { GrArticle } from 'react-icons/gr';
import { SlBookOpen } from 'react-icons/sl';
import Button from '../Buttons/Button';
const NavbarComponent = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className=" top-0 z-20 relative">
      {/* Navbar-1 */}
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="/mkd-logo-dark.png" className="h-8" alt="Mobile Ki Dukan Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white hidden">
              Mobile Ki Dukan
            </span>
          </Link>
          <div className="flex items-center space-x-6 ">
            <Link
              href="tel:+917014878974"
              className="text-base  text-gray-800 dark:text-white hover:underline flex gap-3 items-center"
            >
              <FaPhoneAlt />

              <p> (+91) 7014878974</p>
            </Link>
            <Link href="/register-your-business">
              <Button className="btn-primary">Register Your Business</Button>
            </Link>
          </div>
        </div>
      </nav>
      {/* Navbar-2 */}
      <nav className="bg-mkd-dark text-mkd-light dark:bg-gray-700 z-50">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center  ">
            <ul className="flex flex-row font-normal w-full justify-between mt-0 space-x-8 rtl:space-x-reverse text-base">
              <li>
                <Link href="/" className="text-base   dark:text-white hover:underline flex gap-3 items-center">
                  <GoHome className="text-lg" />

                  <p>Home</p>
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-base   dark:text-white hover:underline flex gap-3 items-center">
                  <SlBookOpen className="text-lg" />

                  <p>About Us</p>
                </Link>
              </li>
              <li
                className="relative"
                onClick={() => setShowMenu(!showMenu)}
                onMouseEnter={() => setShowMenu(true)}
                onMouseLeave={() => setShowMenu(false)}
              >
                <p
                  onClick={() => setShowMenu(!showMenu)}
                  className="text-base   dark:text-white hover:underline flex gap-3 items-center z-[10000]"
                >
                  <MdWorkOutline className="text-lg" />

                  <p>Partner with us</p>
                </p>
                {showMenu && (
                  <div className="absolute top-6 bg-mkd-dark p-5 w-80 z-auto">
                    <li>
                      <Link
                        href="/register-your-business"
                        className="text-base   dark:text-white hover:underline flex py-3 gap-3 items-center"
                      >
                        <p>- Mobile Shops (List Your Store)</p>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/start-business"
                        className="text-base   dark:text-white hover:underline flex gap-3 items-center"
                      >
                        <p>- E-Cart (Start Your Business)</p>
                      </Link>
                    </li>
                  </div>
                )}
              </li>
              <li>
                <Link
                  href="/nearby-stores"
                  className="text-base   dark:text-white hover:underline flex gap-3 items-center"
                >
                  <MdStorefront className="text-lg" />
                  <p>Nearby Stores</p>
                </Link>
              </li>
              {/* <li>
                <Link href="/blogs" className="text-base   dark:text-white hover:underline flex gap-3 items-center">
                  <GrArticle className="text-lg" />

                  <p>Blogs</p>
                </Link>
              </li> */}
              <li>
                <Link href="/contact" className="text-base   dark:text-white hover:underline flex gap-3 items-center">
                  <MdOutlineMessage className="text-lg" />

                  <p>Contact</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarComponent;
