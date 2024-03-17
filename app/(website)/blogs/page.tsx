import BlogsPages from './BlogsPages';
export const dynamic = 'force-dynamic';
export const revalidate = 20;
const BlogsPage = async () => {
  return (
    <div className=" mx-auto px-4 md:px-0">
      <BlogsPages />
    </div>
  );
};

export default BlogsPage;
