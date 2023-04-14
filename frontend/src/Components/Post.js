import React from 'react';
import Nav from './Nav';

const Post = (props) => {
  const { title, author, content } = props;

  return (
    <div>
      <Nav />
      <h2>{title}</h2>
      <h3>by {author}</h3>
      <p>{content}</p>
    </div>
  );
};

export default Post;
