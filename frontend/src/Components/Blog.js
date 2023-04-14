import React from 'react';
import Post from './Post';
import Nav from './Nav';

const Blog = () => {
  const posts = [
    {
      title: 'My First Blog Post',
      author: 'John Doe',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean auctor bibendum arcu, id finibus nulla hendrerit id. Nunc in gravida risus.'
    },
    {
      title: 'My Second Blog Post',
      author: 'Jane Smith',
      content: 'Sed euismod dapibus felis quis feugiat. Pellentesque consequat elit quis turpis ultricies, ac rutrum quam pretium. In lacinia malesuada urna.'
    }
  ];

  return (
    <div className='blog-sec'>
      <Nav />
      {posts.map((post, index) => (
        <Post key={index} title={post.title} author={post.author} content={post.content} />
      ))}
    </div>
  );
};

export default Blog;
