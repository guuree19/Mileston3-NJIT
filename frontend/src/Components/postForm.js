import React, { useState } from 'react';
import './postForm.css'; // Import the CSS file for the PostForm component


const PostForm = () => {
  // State to store the form data
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    content: '',
  });

  // Function to handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can do something with the form data, such as saving it to a database or sending it to a server.
    // For simplicity, we'll just log the form data to the console.
    console.log(formData);
    // Reset the form after submission
    setFormData({
      title: '',
      author: '',
      content: '',
    });
  };

  return (
    <div className="post-form-container">
      <h2>Create New Blog Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            name="author"
            value={formData.author}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
          />
        </div>
        <div className="form-actions">
          
          <button type="button" className="edit-button">
            Edit
          </button>
          <button type="submit" className="submit-button">
            Submit
          </button>

        </div>
      </form>
    </div>
  );
};

export default PostForm;
