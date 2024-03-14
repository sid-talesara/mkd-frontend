// import React from 'react';
// import BlogsHero from './BlogsHero';

// import { getAllPublished } from '../../lib/notion';
// import BlogsCards from './BlogsCards';
// import { BlogCardData } from '@/shared/types';
// export const revalidate = 10;
// const BlogsPage = async () => {
//   const posts = await getAllPublished();
//   console.log(posts);
//   return (
//     <>
//       <BlogsHero />
//       <div className="flex gap-10 justify-center py-12 max-w-screen-xl m-auto flex-wrap">
//         {posts.map((post: BlogCardData) => (
//           <div key={post.id}>
//             <BlogsCards {...post} />
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default BlogsPage;

// Import your components and utilities
import React from 'react';
import BlogsHero from './BlogsHero';
import BlogsCards from './BlogsCards';
import { getAllPublished } from '../../lib/notion';
import { BlogCardData } from '@/shared/types';

// Your page component
function BlogsPage({ posts }: any) {
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
}

// Fetch data at build time with ISR
export async function getStaticProps() {
  const posts = await getAllPublished();
  return {
    props: { posts },
    revalidate: 10, // Revalidate at most once every 10 seconds
  };
}

export default BlogsPage;
