import React from 'react';
import { Divide } from 'lucide-react';

interface BlogPostProps {
  title: string;
  date: string;
  excerpt: string;
  imageUrl: string;
  tags?: string[];
}

const BlogPost: React.FC<BlogPostProps> = ({
  title,
  date,
  excerpt,
  imageUrl,
  tags = [],
}) => {
  return (
    <article className="max-w-2xl mx-auto mb-16 group">
      {/* Header with divider */}
      <header className="mb-8">
        <Divide className="w-8 h-8 text-gray-300 mx-auto mb-4" />
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
          {title}
        </h2>
        <div className="flex justify-center items-center gap-4 text-sm text-gray-500">
          <time dateTime={date}>{date}</time>
        </div>
      </header>

      {/* Image */}
      <div className="relative w-full h-64 md:h-80 lg:h-96 mx-auto mb-6 overflow-hidden rounded-lg shadow-md">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          width={800}
          height={450}
        />
      </div>

      {/* Content */}
      <div className="px-4">
        <p className="text-lg text-gray-700 mb-6">{excerpt}</p>
        
        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {tags.map((tag) => (
              <span 
                key={tag} 
                className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
};

export default BlogPost;