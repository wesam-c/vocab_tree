import React from 'react';

const BlogPostCard = ({ title, excerpt, image, readMoreLink }) => {
  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg mb-6">
      {/* Blog Image */}
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-t-lg"
        />
      )}

      {/* Blog Content */}
      <div className="p-4">
        {/* Blog Title */}
        <h2 className="text-2xl font-bold text-lime-700 mb-2">{title}</h2>

        {/* Blog Excerpt */}
        <p className="text-gray-700 mb-4">{excerpt}</p>

        {/* Read More Button */}
        <a
          href={readMoreLink}
          className="bg-lime-700 text-white px-4 py-2 rounded-lg hover:bg-lime-600 transition-all"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default BlogPostCard;
