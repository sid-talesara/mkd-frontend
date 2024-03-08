'use client';
import Link from 'next/link';
import PrimaryBtn from '../Buttons/Button';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdStorefront, MdWorkOutline, MdOutlineMessage } from 'react-icons/md';
import { GoHome } from 'react-icons/go';
import { GrArticle } from 'react-icons/gr';
import { SlBookOpen } from 'react-icons/sl';
import { IoReorderThreeOutline } from 'react-icons/io5';
import { useState } from 'react';
import Button from '../Buttons/Button';
import { RiShoppingCart2Line } from 'react-icons/ri';
const NavbarMobileComponent = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {};
  return (
    <div className="sticky top-0 z-50">
      <nav className="bg-white border-gray-200 dark:bg-gray-900 shadow-md">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="/mkd-logo-dark.png" className="h-5 md:h-8" alt="mobile ki dukan logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white hidden">
              Mobile Ki Dukan
            </span>
          </Link>
          <div className="flex  items-center gap-2 rtl:space-x-reverse">
            <Link
              href="tel:+919462551308"
              className="text-sm md:text-base text-gray-800 dark:text-white hover:underline flex gap-3 items-center"
            >
              <FaPhoneAlt />

              <p>(+91) 94625-51308</p>
            </Link>

            <Link href="/" className="hidden md:visible">
              <Button className="btn-primary">Register Your Business</Button>
            </Link>

            <button
              type="button"
              title="toggle"
              className="p-2 bg-mkd-dark/10 rounded-md"
              onClick={() => setToggle(!toggle)}
            >
              <IoReorderThreeOutline className=" text-2xl md:text-3xl " />
            </button>
          </div>
        </div>
      </nav>
      {toggle && (
        <nav className="bg-mkd-dark  text-mkd-light dark:bg-gray-700 py-5 ">
          <div className="max-w-screen-xl px-4 py-3 mx-auto">
            <div className="flex items-center  ">
              <ul className="flex flex-col font-normal w-full justify-between mt-0 gap-4 rtl:space-x-reverse text-base uppercase ">
                <li>
                  <Link
                    href="/"
                    className="  dark:text-white hover:underline flex gap-5 items-center hover:bg-mkd-light hover:text-mkd-dark p-2 rounded-md"
                  >
                    <GoHome className="text-lg" />

                    <p>Home</p>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="  dark:text-white hover:underline flex gap-5 items-center  hover:bg-mkd-light hover:text-mkd-dark p-2 rounded-md"
                  >
                    <SlBookOpen className="text-lg" />

                    <p>About Us</p>
                  </Link>
                </li>

                <li>
                  <Link
                    href="/register-your-business"
                    className="text-base   dark:text-white hover:underline flex py-3 gap-3 items-center"
                  >
                    <MdWorkOutline className="text-lg" />
                    <p>Mobile Shops (List Your Store)</p>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/start-business"
                    className="text-base   dark:text-white hover:underline py-3  flex gap-3 items-center"
                  >
                    <RiShoppingCart2Line className="text-lg" />
                    <p>E-Cart (Start Your Business)</p>
                  </Link>
                </li>

                <li>
                  <Link
                    href="/nearby-stores"
                    className="  dark:text-white hover:underline flex gap-5 items-center py-3  hover:bg-mkd-light hover:text-mkd-dark p-2 rounded-md"
                  >
                    <MdStorefront className="text-lg" />

                    <p>Nearby Stores</p>
                  </Link>
                </li>
                {/* <li>
                  <Link
                    href="/blogs"
                    className="  dark:text-white hover:underline flex gap-5 items-center  hover:bg-mkd-light hover:text-mkd-dark p-2 rounded-md"
                  >
                    <GrArticle className="text-lg" />

                    <p>Blogs</p>
                  </Link>
                </li> */}
                <li>
                  <Link
                    href="/contact"
                    className="  dark:text-white hover:underline flex gap-5 items-center  hover:bg-mkd-light hover:text-mkd-dark p-2 rounded-md"
                  >
                    <MdOutlineMessage className="text-lg" />

                    <p>Contact</p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      )}
    </div>
  );
};

export default NavbarMobileComponent;
