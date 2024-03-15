import BlogsHero from './BlogsHero';
import BlogsCards from './BlogsCards';
import { BlogCardData } from '@/shared/types';

const BlogsPage = async () => {
  const url = process.env.NEXT_HOST_URL || 'http://localhost:3000';
  const response = await fetch(`${url}/api/get-all-posts`, {
    next: { revalidate: 20 },
  });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json(); // Parse the JSON from the response

  console.log(data);
  return (
    <>
      <BlogsHero />
      <div className="flex gap-10 justify-center py-12 max-w-screen-xl m-auto flex-wrap">
        {data?.posts.map((post: BlogCardData) => (
          <div key={post.id}>
            <BlogsCards {...post} />
          </div>
        ))}
      </div>
    </>
  );
};

export default BlogsPage;
