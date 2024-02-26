import Image from 'next/image';
import React from 'react';

const BlogsHero = () => {
  return (
    <div>
      <Image src={'/slide4.png'} className="w-full h-96 object-cover" width={1000} height={1000} alt="blogs-cover" />
    </div>
  );
};

export default BlogsHero;
