import React, { useState } from 'react';
import './Contact.css'

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');

  const checkValidations = () => {
    let letters = /^[a-zA-Z\s]*$/;
    if (name.trim() === '') {
      setNameError('Please fill out this field!');
    } else {
      if (!letters.test(name.trim())) {
        setNameError('Please enter only characters!');
      }
    }
    if (email.trim() === '') {
      setEmailError('Please fill out this field!');
    } else {
      // Perform email validation
    }
    // Add validations for other fields if needed
  };

  const reset = () => {
    setName('');
    setEmail('');
    setCompanyName('');
    setMessage('');
    setNameError('');
    setEmailError('');
    // Reset other error messages if any
  };

  return (
    <div className="contain">
      <div className="wrapper">
        <div className="form">
          <h4 className='addcol'>GET IN TOUCH</h4>
          <h2 className="form-headline addcol" >Send me a message</h2>
          <form id="submit-form" action="">
            <p>
              <input value={name} onChange={(e) => setName(e.target.value)} className="form-input" type="text" placeholder="Your Name*" />
              <small className="name-error">{nameError}</small>
            </p>
            <p>
              <input value={email} onChange={(e) => setEmail(e.target.value)} className="form-input" type="email" placeholder="Your Email*" />
              <small className="email-error">{emailError}</small>
            </p>
            <p className="full-width">
              <input value={companyName} onChange={(e) => setCompanyName(e.target.value)} className="form-input" type="text" placeholder="Company Name*" required />
              <small></small>
            </p>
            <p className="full-width">
              <textarea minLength="20" value={message} onChange={(e) => setMessage(e.target.value)} cols="30" rows="7" placeholder="Your Message*" required></textarea>
              <small></small>
            </p>
            <p className="full-width">
              <input type="submit" className="submit-btn" value="Submit" onClick={checkValidations} />
              <button type="button" className="reset-btn" onClick={reset}>Reset</button>
            </p>
          </form>
        </div>

        <div className="contacts contact-wrapper">
          <ul>
            <li className='addcol'>Please reach out!</li>
            <span className="highlight-contact-info">
              <li className="email-info addcol"><i className="fa fa-envelope" aria-hidden="true"></i> andrew.s@gmail.com</li>
              <li><i className="fa fa-phone" aria-hidden="true"></i> <span className="highlight-text">+480-524-6776</span></li>
            </span>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
