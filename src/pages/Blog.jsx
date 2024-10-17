import React from 'react';
import BlogPostCard from '../components/BlogPostCard';
import image1 from '../image/image1.png';
import image2 from '../image/image2.png';
import image3 from '../image/image3.png';

const BlogPage = () => {
  const blogPosts = [
    {
      title: 'The Power of Learning New Words',
      excerpt: 'Discover how expanding your vocabulary can boost your communication skills and cognitive abilities...',
      image: image3,
      readMoreLink: '/blog/power-of-learning-new-words'
    },
    {
      title: 'How to Master Vocabulary with Flashcards',
      excerpt: 'Flashcards are an effective way to memorize new words. Learn the best practices to use them efficiently...',
      image: image2,
      readMoreLink: '/blog/master-vocabulary-with-flashcards'
    },
    {
        title: 'Using Mnemonics to Remember New Vocabulary',
        excerpt: 'Mnemonics are a great way to associate new words with memorable images or phrases. Explore tips to enhance your learning...',
        image: image1,
        readMoreLink: '/blog/using-mnemonics-to-remember-vocabulary'
      }
  ];

  return (
    <div className=" dark:bg-gray-800 bg-lime-200  min-h-screen">
      

      {/* Blog Posts List */}
      <div className="container  pt-32 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
