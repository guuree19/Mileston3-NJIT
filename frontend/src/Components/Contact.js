import React from "react";
import "./Contact.css";
import Nav from "./Nav";

function Contact() {
  return (
    <div className="contact-container">
      <Nav />
      <div className="contact-content">
        <h1 className="contact-heading">Get in Touch</h1>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="fname">First Name:</label>
            <input type="text" id="fname" name="fname" />
          </div>
          <div className="form-group">
            <label htmlFor="lname">Last Name:</label>
            <input type="text" id="lname" name="lname" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" />
          </div>
          <button className="submit-button" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
