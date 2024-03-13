import { BlogCardData } from '@/shared/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BlogsCards = ({ id, coverImg, title, description, date, slug }: BlogCardData) => {
  return (
    <Link href={`blogs/${slug}`}>
      <div className="w-96 px-5 cursor-pointer border p-4 rounded-xl">
        <div className=" overflow-hidden rounded-xl ">
          <Image src={coverImg} className=" h-64 object-cover " width={1000} height={500} alt="blogs-cover" />
        </div>
        {/* meta info */}
        <div className="flex gap-2 py-2">
          <p>{date}</p>
        </div>
        {/* heading and short info */}
        <div>
          <h3 className="text-2xl font-semibold py-2 hover:underline transition-all duration-200 hover:text-mkd-primary">
            {title}
          </h3>
          <p className="text-mkd-dark/80">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default BlogsCards;
