import React from 'react';

const Contact = () => {
  return (
    <div className="Contact">
      <h1>Contact Me</h1>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message"></textarea>
      </div>
      <button className="submit-button">Submit</button>
    </div>
  );
}

export default Contact;
