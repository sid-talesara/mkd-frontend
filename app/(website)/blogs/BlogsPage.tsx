'use client'; // Ensures this component runs only on the client side in a Next.js app
import React, { useEffect, useState } from 'react';
import BlogsHero from './BlogsHero';
import axios from 'axios';
import BlogsCards from './BlogsCards';
import { BlogCardData } from '@/shared/types';

const BlogsPage = () => {
  const [data, setData] = useState<BlogCardData[] | null>(null);
  const [loading, setLoading] = useState(true); // Add a loading state

  const fetchData = async () => {
    try {
      setLoading(true); // Set loading to true when the fetch starts
      const response = await axios.get('/api/get-all-posts');
      console.log(response.data.posts);
      setData(response.data.posts);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    } finally {
      setLoading(false); // Set loading to false when the fetch is complete
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <BlogsHero />
      <div className="flex gap-10 justify-center py-12 max-w-screen-xl m-auto flex-wrap">
        {
          loading
            ? 'Fetching data...' // Show loading message
            : data && data.length > 0
            ? data.map((post: BlogCardData) => (
                <div key={post.id}>
                  <BlogsCards {...post} />
                </div>
              ))
            : 'No data found' // Show message if there is no data
        }
      </div>
    </>
  );
};

export default BlogsPage;
