import Link from 'next/link';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdStorefront, MdWorkOutline, MdOutlineMessage } from 'react-icons/md';
import { GoHome } from 'react-icons/go';
import { GrArticle } from 'react-icons/gr';
import { SlBookOpen } from 'react-icons/sl';
import Button from '../Buttons/Button';
const NavbarComponent = () => {
  return (
    <div className="sticky top-0 ">
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <Link href="https://markals.in" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="/logo.png" className="h-8" alt="Mobile Ki Dukan Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white hidden">
              Mobile Ki Dukan
            </span>
          </Link>
          <div className="flex items-center space-x-6 ">
            <Link
              href="tel:+919462551308"
              className="text-base  text-gray-800 dark:text-white hover:underline flex gap-3 items-center"
            >
              <FaPhoneAlt />

              <p>(+91) 94625-51308 </p>
            </Link>
            <Link href="/">
              <Button className="btn-primary">Register Your Business</Button>
            </Link>
          </div>
        </div>
      </nav>
      <nav className="bg-mkd-dark text-mkd-light dark:bg-gray-700 ">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center  ">
            <ul className="flex flex-row font-normal w-full justify-between mt-0 space-x-8 rtl:space-x-reverse text-base">
              <li>
                <Link href="#" className="text-base   dark:text-white hover:underline flex gap-3 items-center">
                  <GoHome className="text-lg" />

                  <p>Home</p>
                </Link>
              </li>
              <li>
                <Link href="#" className="text-base   dark:text-white hover:underline flex gap-3 items-center">
                  <SlBookOpen className="text-lg" />

                  <p>About Us</p>
                </Link>
              </li>
              <li>
                <Link href="#" className="text-base   dark:text-white hover:underline flex gap-3 items-center">
                  <MdWorkOutline className="text-lg" />

                  <p>Services</p>
                </Link>
              </li>
              <li>
                <Link href="#" className="text-base   dark:text-white hover:underline flex gap-3 items-center">
                  <MdStorefront className="text-lg" />

                  <p>Nearby Stores</p>
                </Link>
              </li>
              <li>
                <Link href="#" className="text-base   dark:text-white hover:underline flex gap-3 items-center">
                  <GrArticle className="text-lg" />

                  <p>Blogs</p>
                </Link>
              </li>
              <li>
                <Link href="#" className="text-base   dark:text-white hover:underline flex gap-3 items-center">
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
