import Image from 'next/image';
import React from 'react';

const BlogsCards = () => {
  return (
    <div className="w-[550px] px-5 cursor-pointer">
      <div className=" overflow-hidden rounded-xl ">
        <Image src={'/slide4.png'} className=" h-64 object-cover " width={1000} height={500} alt="blogs-cover" />
      </div>
      {/* meta info */}
      <div className="flex gap-2 py-2">
        <p className="font-medium">Shivam Kumar</p>
        <p>| </p>
        <p>19th feb 2024</p>
      </div>
      {/* heading and short info */}
      <div>
        <h3 className="text-2xl font-semibold py-2 hover:underline transition-all duration-200 hover:text-mkd-primary">
          Unlocking performance, scalability, and cost-efficiency of Zomato’s Billing Platform by switching from TiDB to
          DynamoDB
        </h3>
        <p className="text-mkd-dark/80">
          Zomato accomplished a seamless migration from TiDB to DynamoDB. The transition has empowered Zomato to
          efficiently serve its growing user base by managing four times more transactions, decreasing latency by 90%
          and reducing database costs by 50%.
        </p>
      </div>
    </div>
  );
};

export default BlogsCards;
