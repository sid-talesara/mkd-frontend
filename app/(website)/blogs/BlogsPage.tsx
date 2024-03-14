import React from 'react';
import BlogsHero from './BlogsHero';

import { getAllPublished } from '../../lib/notion';
import BlogsCards from './BlogsCards';
import { BlogCardData } from '@/shared/types';

const BlogsPage = async () => {
  const posts = await getAllPublished();
  console.log(posts);
  return (
    <>
      <BlogsHero />
      <div className="flex gap-10 justify-center py-12 max-w-screen-xl m-auto flex-wrap">
        {posts.map((post: BlogCardData) => (
          <div key={post.id}>
            <BlogsCards {...post} />
          </div>
        ))}
      </div>
    </>
  );
};

export default BlogsPage;
