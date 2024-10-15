
 import React from 'react';
 import "./styles/Contacts.css";

 function Contacts() {
  return (
      <div className="contacts-container">
          <h2 className="contacts-title">Contact Us</h2>
          <p className="contacts-description">
              We’d love to hear from you! If you have any questions, comments, or feedback, feel free to reach out to us.
          </p>
          <h3 className="contacts-subtitle">Email:</h3>
          <p className="contacts-info">support@fakestore.com</p>
          <h3 className="contacts-subtitle">Phone:</h3>
          <p className="contacts-info">1-800-FAKE-123 (1-800-325-3123)</p>
          <h3 className="contacts-subtitle">Address:</h3>
          <p className="contacts-info">
              123 Fake Street,<br />
              Faketown, FK 12345
          </p>
          <h3 className="contacts-subtitle">Business Hours:</h3>
          <p className="contacts-info">
              Monday to Friday: 9 AM - 5 PM<br />
              Saturday: 10 AM - 2 PM<br />
              Sunday: Closed
          </p>
          <h3 className="contacts-subtitle">Follow Us:</h3>
          <p className="contacts-info">
              Facebook: <a href="https://www.facebook.com/fakestore" target="_blank" rel="noopener noreferrer">facebook.com/fakestore</a><br />
              Instagram: <a href="https://www.instagram.com/fakestore" target="_blank" rel="noopener noreferrer">instagram.com/fakestore</a><br />
              Twitter: <a href="https://www.twitter.com/fakestore" target="_blank" rel="noopener noreferrer">twitter.com/fakestore</a>
          </p>
          <p className="contacts-description">
              Feel free to fill out the form below, and we will get back to you as soon as possible!
          </p>
      </div>
  );
}

export default Contacts;