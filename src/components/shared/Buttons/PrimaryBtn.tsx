import React from 'react';
import type { ReactNode } from 'react';
type PrimaryBtnProps = {
  color: string;
  children: ReactNode;
};

const PrimaryBtn = ({ children, color }: PrimaryBtnProps) => {
  return (
    <button
      type="button"
      className={`text-white bg-mkd-${color}/95 hover:bg-mkd-${color}/70 focus:ring-4 focus:ring-mkd-${color} font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-${color} dark:hover:bg-${color} focus:outline-none dark:focus:bg-mkd-${color}/95`}
    >
      {children}
    </button>
  );
};

export default PrimaryBtn;
