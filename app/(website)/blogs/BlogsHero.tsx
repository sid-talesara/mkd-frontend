import Image from 'next/image';
import React from 'react';

const BlogsHero = () => {
  return (
    <div>
      <Image
        src={'/blog-banner.png'}
        className="w-full pt-16  md:pt-0 object-cover"
        width={1000}
        height={1000}
        alt="blogs-cover"
      />
    </div>
  );
};

export default BlogsHero;
