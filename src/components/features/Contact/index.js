import React, { useState } from "react";
import styles from "./contact.module.css";

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = "dev.rajeshkumars@gmail.com";
    const subject = encodeURIComponent("Contact Form Submission");
    const body = encodeURIComponent(
      `First Name: ${formData.firstName}\nLast Name: ${formData.lastName}\nEmail: ${formData.email}\nSubject: ${formData.subject}\nMessage: ${formData.message}`
    );
    window.open(`mailto:${email}?subject=${subject}&body=${body}`);
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  return (
    <div className="container">
      <p className="fs-1 primary_txt text-center">
        <strong>How can I help you?</strong>
      </p>
      <p className={`secondary_txt fs-5 ${styles.justify_txt}`}>
        If you have any questions or would like to get in touch, feel free to
        reach out to me using the contact details provided below. I'm open to
        answering inquiries, or simply connecting with fellow developers.
      </p>
      <div className="d-flex justify-content-center">
        <div className="my-5 w-75">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md mb-3">
                <label htmlFor="firstName">First Name:</label>
                <input
                  type="text"
                  name="firstName"
                  className={`form-control ${styles.form_input}`}
                  placeholder="Enter your first name"
                  onChange={handleChange}
                  value={formData.firstName}
                  required
                />
              </div>
              <div className="col-md mb-3">
                <label htmlFor="lastName">Last Name:</label>
                <input
                  type="text"
                  name="lastName"
                  className={`form-control ${styles.form_input}`}
                  placeholder="Enter your last name"
                  onChange={handleChange}
                  value={formData.lastName}
                  required
                />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                className={`form-control ${styles.form_input}`}
                placeholder="Enter your email address"
                onChange={handleChange}
                value={formData.email}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="subject">Subject:</label>
              <input
                type="text"
                name="subject"
                placeholder="How can we help you?"
                className={`form-control ${styles.form_input}`}
                onChange={handleChange}
                value={formData.subject}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message">Message:</label>
              <textarea
                name="message"
                style={{ maxHeight: "200px" }}
                placeholder="write your message"
                className={`form-control ${styles.form_input}`}
                onChange={handleChange}
                value={formData.message}
                required
              ></textarea>
            </div>
            <button
              className={`my-3 btn ${styles.form_btn}`}
              style={{ width: "100%" }}
              type="submit"
            >
              Send
            </button>
          </form>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Contact;
