import React from 'react';

const Post = (props) => {
  const { title, author, content } = props;

  return (
    <div>
      <h2>{title}</h2>
      <h3>by {author}</h3>
      <p>{content}</p>
    </div>
  );
};

export default Post;
