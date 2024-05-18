import React from 'react';
import './postForm'; // Assume you create a Post.css for styling

const Post = ({ title, author, content }) => {
  return (
    <article className="post">
      <h2>{title}</h2>
      <h3>by {author}</h3>
      <p>{content}</p>
    </article>
  );
};

export default Post;
