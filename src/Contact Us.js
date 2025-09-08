import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Access form data using e.target
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      phonenumber: e.target.phonenumber.value,
      address: e.target.address.value,
      profession: e.target.profession.value,
      postalcode: e.target.postalcode.value,
      message: e.target.message.value
    };
  
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
  
      if (!response.ok) {
        throw new Error('Failed to submit form');
      }
  
      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
  
  return (
    <div className="contact-form-container">
      <div className="contact-form">
        <h3>Get in touch with us</h3>
        {submitted ? (
          <p>Thank you! Visit again</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Enter Your Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Enter Your Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="phonenumber">Enter Your Phone Number</label>
              <input type="tel" id="phonenumber" name="phonenumber" required />
            </div>
            <div className="form-group">
              <label htmlFor="address">Enter Your Address</label>
              <input type="text" id="address" name="address" required />
            </div>
            <div className="form-group">
              <label htmlFor="profession">Enter Your Profession</label>
              <input type="text" id="profession" name="profession" required />
            </div>
            <div className="form-group">
              <label htmlFor="postalcode">Enter Your Postal Code</label>
              <input type="tel" id="postalcode" name="postalcode" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Enter Your Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" >Send Now</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
