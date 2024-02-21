import React from 'react';

const CardTags = ({ title = 'Bestseller' }: { title: string }) => {
  return <div className={`bg-mkd-primary w-fit px-2 text-sm py-1 rounded-md text-mkd-light`}>{title}</div>;
};

export default CardTags;
