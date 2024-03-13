import { getSingleBlogPostBySlug } from '../../../lib/notion';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import Image from 'next/image';

interface CodeBlockProps {
  language: string;
  codestring: string;
}
const CodeBlock = ({ language, codestring }: CodeBlockProps) => {
  return (
    <SyntaxHighlighter language={language} style={vscDarkPlus} PreTag="div">
      {codestring}
    </SyntaxHighlighter>
  );
};

interface paramsType {
  params: {
    slug: string;
  };
}

interface CodeProps {
  node: any; // Use a more specific type if possible
  inline?: boolean; // Marking inline as optional
  className?: string;
  children?: React.ReactNode;
}

const postPage = async ({ params }: paramsType) => {
  const post = await getSingleBlogPostBySlug(params.slug);

  return (
    <article className="max-w-screen-lg mx-auto py-8 px-4">
      {/* cover Img */}
      <Image
        src={post.metadata.coverImg}
        className="w-full my-12 md:my-4 md:h-96 object-cover rounded-2xl h-44"
        width={1000}
        height={1000}
        alt="blogs-cover"
      />
      {/* Title of Blog */}
      <h1 className="text-3xl font-bold py-0 md:py-8 text-center">{post.metadata.title}</h1>

      {/* Tags and Date of publish */}
      <div className="flex justify-between items-center py-4 flex-col-reverse md:flex-row">
        <div className="flex gap-2 flex-wrap justify-center">
          {post.metadata.tags.map((tag: string, index: number) => (
            <p key={index} className="bg-gray-100 p-1 px-2 w-fit rounded-md break-words">
              {tag}
            </p>
          ))}
        </div>
        <p>{post.metadata.date}</p>
      </div>

      <div className="markdown prose max-w-none">
        {/* rendering code or markdown */}
        <ReactMarkdown
          components={{
            code({ node, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '');
              return match ? (
                <CodeBlock codestring={String(children).replace(/\n$/, '')} language={match[1]} />
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
        >
          {post.markdown.parent}
        </ReactMarkdown>
      </div>
    </article>
  );
};

export default postPage;
