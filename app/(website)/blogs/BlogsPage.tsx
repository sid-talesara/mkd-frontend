'use client';
import React, { useEffect, useState } from 'react';
import BlogsHero from './BlogsHero';
import BlogsCards from './BlogsCards';
import { BlogCardData } from '@/shared/types'; // Ensure this path is correctly resolved

const BlogsPage = () => {
  const [data, setData] = useState<BlogCardData[] | null>(null);
  const [loading, setLoading] = useState(true); // Add a loading state

  const fetchData = async () => {
    try {
      setLoading(true); // Set loading to true when the fetch starts
      const response = await fetch('/api/get-all-posts', { next: { revalidate: 60 } });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json(); // Parse the JSON from the response
      setData(data.posts); // Assuming the JSON has a posts field
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
            ? data.map((post) => (
                <div key={post.id}>
                  <BlogsCards {...post} /> {/* Ensure BlogsCards accepts a `post` prop */}
                </div>
              ))
            : 'No data found' // Show message if there is no data
        }
      </div>
    </>
  );
};

export default BlogsPage;
