import Link from 'next/link';
import React from 'react';
import { FaXTwitter } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa';
type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-mkd-dark text-mkd-light">
      <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-0 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex justify-center">
            <img src="/mkd-logo-light.png" className="h-24" alt="Mobile Ki Dukan Logo" />
          </div>

          {/* Social Media Handles */}
          <ul className="mt-8 flex justify-center gap-6 sm:mt-0 sm:justify-end">
            <li>
              <Link
                href="https://www.facebook.com/mkdmobiledukan/"
                rel="noreferrer"
                target="_blank"
                className=" transition hover:opacity-75"
              >
                <span className="sr-only">Facebook</span>

                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </li>

            <li>
              <Link
                href="https://www.instagram.com/mkd_nxgshop?igsh=eXA2ank4enBkbXY5"
                rel="noreferrer"
                target="_blank"
                className=" transition hover:opacity-75"
              >
                <span className="sr-only">Instagram</span>

                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </li>

            <li>
              <Link
                href="https://x.com/mobilekidukan?t=w3OQnbFU4vnMjIrGMYpOLw&s=09"
                rel="noreferrer"
                target="_blank"
                className=" transition hover:opacity-75"
              >
                <span className="sr-only">Twitter</span>

                <FaXTwitter className="h-6 w-6" />
              </Link>
            </li>
            <li>
              <Link
                href="https://in.linkedin.com/company/mobile-ki-dukan"
                rel="noreferrer"
                target="_blank"
                className=" transition hover:opacity-75"
              >
                <span className="sr-only">Linkedin</span>

                <FaLinkedin className="h-6 w-6" />
              </Link>
            </li>
          </ul>
        </div>

        {/* middle menu */}
        <div className="grid grid-cols-1 gap-8 border-t border-gray-100 pt-8 sm:grid-cols-2 lg:grid-cols-4 lg:pt-16">
          {/* 1 */}
          <div>
            <p className="font-medium ">Services</p>

            <ul className="mt-6 space-y-4 text-sm text-mkd-light/75">
              <li>
                <Link href="/register-your-business" className=" transition hover:opacity-75">
                  {' '}
                  List your business
                </Link>
              </li>
              <li>
                <Link href="/start-business" className=" transition hover:opacity-75">
                  {' '}
                  Start Business
                </Link>
              </li>

              <li>
                <Link href="/nearby-stores" className=" transition hover:opacity-75">
                  {' '}
                  Nearby Stores
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-medium ">Company</p>

            <ul className="mt-6 space-y-4 text-sm  text-mkd-light/75">
              <li>
                <Link href="/about" className=" transition hover:opacity-75">
                  {' '}
                  About Us{' '}
                </Link>
              </li>

              <li>
                <Link href="#" className=" transition hover:opacity-75">
                  {' '}
                  FAQ{' '}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-medium ">Helpful Links</p>

            <ul className="mt-6 space-y-4 text-sm  text-mkd-light/75 ">
              <li>
                <Link href="/docs/MKD Privany Policy.pdf" target="_blank" className=" transition hover:opacity-75">
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link href="/docs/MKD Disclaimer.pdf" target="_blank" className=" transition hover:opacity-75">
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/MKD Terms and Conditions.pdf"
                  target="_blank"
                  className=" transition hover:opacity-75"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-medium ">Quick Links</p>

            <ul className="mt-6 space-y-4 text-sm  text-mkd-light/75">
              <li>
                <Link href="/" className=" transition hover:opacity-75">
                  {' '}
                  Home{' '}
                </Link>
              </li>

              <li>
                <Link href="/register-your-business" className=" transition hover:opacity-75">
                  {' '}
                  Services{' '}
                </Link>
              </li>

              <li>
                <Link href="/nearby-stores" className=" transition hover:opacity-75">
                  {' '}
                  Nearby Stores{' '}
                </Link>
              </li>

              <li>
                <Link href="/blogs" className=" transition hover:opacity-75">
                  {' '}
                  Blogs{' '}
                </Link>
              </li>
              <li>
                <Link href="/contact" className=" transition hover:opacity-75">
                  {' '}
                  Contact{' '}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Attribution */}
        <div className="text-center md:text-left">
          <p className="text-xs text-gray-300">&copy; 2024. Mobile Ki Dukan. All rights reserved.</p>
          <p className="text-xs text-gray-300">
            Developed and Maintained by
            <Link
              href={'https://www.markals.in'}
              rel="follow"
              className="font-bold text-mkd-accent"
              title="Visit Markals Website"
            >
              {' '}
              Markals
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
