import React from 'react';
import CategoriesNavbar from './CategoriesNavbar';
import BlogsHero from './BlogsHero';
import BlogsCards from './BlogsCards';

const BlogsPage = () => {
  return (
    <>
      <BlogsHero />
      <CategoriesNavbar />
      <div className="flex gap-10 justify-center py-12 max-w-screen-xl m-auto flex-wrap">
        <BlogsCards />
        <BlogsCards />
        <BlogsCards />
        <BlogsCards />
        <BlogsCards />
      </div>
    </>
  );
};

export default BlogsPage;
