import BlogsHero from './BlogsHero';
import BlogsCards from './BlogsCards';
import { BlogCardData } from '@/shared/types';
import { getAllPublished } from '../../lib/notion';
export const dynamic = 'force-dynamic';

const BlogsPages = async () => {
  const data = await getAllPublished();
  console.log(data);
  return (
    <>
      <BlogsHero />
      <div className="flex  max-w-screen-md  gap-10 justify-center py-12 max-w-screen-xl m-auto flex-wrap">
        {data?.map((post: BlogCardData) => (
          <div key={post.id}>
            <BlogsCards {...post} />
          </div>
        ))}
      </div>
    </>
  );
};

export default BlogsPages;
