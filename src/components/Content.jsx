import { useLoaderData } from 'react-router';
import placeholderImage from '../assets/404.jpg';
import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
const Content = () => {
  const blog = useLoaderData();
  const { cover_image, title, url, tags, body_html } = blog;
  console.log(blog);
  return (
    <div
      rel="noopener noreferrer"
      href="#"
      className=" mx-auto group  border p-2 border-opacity-30 hover:no-underline focus:no-underline "
    >
      <img
        role="presentation"
        className="object-cover w-full rounded h-44 bg-gray-500"
        src={cover_image ? cover_image : placeholderImage}
      />
      <div className="flex flex-wrap py-6 gap-2 border-t border-dashed border-gray-400">
        {tags.map((tag) => {
          return (
            <span
              key={tag}
              className="px-2 py-1 text-sm text-gray-800 bg-gray-100 rounded"
            >
              #{tag}
            </span>
          );
        })}
      </div>
      <div className="space-y-2">
        <a
          target="_blank"
          href={url}
          className="text-2xl font-semibold group-hover:underline group-focus:underline"
        >
          {title}
        </a>
        <Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>
      </div>
    </div>
  );
};

export default Content;
