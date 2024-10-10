import React from 'react';
import BlogPostCard from '../components/BlogPostCard';

const BlogPage = () => {
  const blogPosts = [
    {
      title: 'The Power of Learning New Words',
      excerpt: 'Discover how expanding your vocabulary can boost your communication skills and cognitive abilities...',
      image: 'https://example.com/image1.jpg',
      readMoreLink: '/blog/power-of-learning-new-words'
    },
    {
      title: 'How to Master Vocabulary with Flashcards',
      excerpt: 'Flashcards are an effective way to memorize new words. Learn the best practices to use them efficiently...',
      image: 'https://example.com/image2.jpg',
      readMoreLink: '/blog/master-vocabulary-with-flashcards'
    },
    {
        title: 'Using Mnemonics to Remember New Vocabulary',
        excerpt: 'Mnemonics are a great way to associate new words with memorable images or phrases. Explore tips to enhance your learning...',
        image: 'https://example.com/image3.jpg',
        readMoreLink: '/blog/using-mnemonics-to-remember-vocabulary'
      }
  ];

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold text-center my-8 text-lime-700">Vocab Tree Blog</h1>

      {/* Blog Posts List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post, index) => (
          <BlogPostCard
            key={index}
            title={post.title}
            excerpt={post.excerpt}
            image={post.image}
            readMoreLink={post.readMoreLink}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
