import React, { useState, useEffect } from 'react';
import Post from './Post';
import './Blog.css';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Placeholder for fetching data from an API
    fetch('http://localhost:5001/api/posts')
      .then(response => response.json())
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch posts:', err);
        setError('Failed to load posts.');
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className='blog-sec'>
      <h1>Blog Posts</h1>
      {posts.map((post, index) => (
        <Post key={index} title={post.title} author={post.author} content={post.content} />
      ))}
    </div>
  );
};

export default Blog;
