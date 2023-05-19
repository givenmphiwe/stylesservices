import React, { useRef } from 'react';
import emailjs from "@emailjs/browser";
import "./styles/contact.css";
import { FaEnvelope, FaMapMarker, FaPhone } from "react-icons/fa";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_6nbru9p", "template_yeau5pp", form.current, "p33t-bhK3YQKvvR5e")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset()
    
  }
  return (
    <body>
      <section className="contact">
        <div className="content">
          <h2>Contact us</h2>
          <p>Talk to our friendly consultant</p>
        </div>
        <div className="container">
          <div className="contactInfo">
            <div className="box">
              <div className="icon">
                <FaMapMarker />
              </div>
              <div className="text">
                <h3>Address</h3>
                <p>325 Rivonia Boulevard,Edenburg, Sandton</p>
              </div>
            </div>

            <div className="box">
              <div className="icon">
                <FaPhone />
              </div>
              <div className="text">
                <h3>Phone</h3>
                <p>+27 84 602 3144</p>
              </div>
            </div>

            <div className="box">
              <div className="icon">
                <FaEnvelope />
              </div>
              <div className="text">
                <h3>Email</h3>
                <p>info@stylesservicesgr.com</p>
              </div>
            </div>
          </div>

          <div className="contactForm">
            <form ref={form} onSubmit={sendEmail}>
              <h2>Send Message</h2>
              <div className="inputBox">
                <input type="text" name="name" required />
                <span>Full Name</span>
              </div>
              <div className="inputBox">
                <input type="email" name="email" required />
                <span>Email</span>
              </div>
              <div className="inputBox">
                <textarea name="message" required></textarea>
                <span>Type your Message..</span>
              </div>
              <div className="inputBox">
                <input type="submit" value="Send"/>
              </div>
            </form>
          </div>
        </div>
      </section>
    </body>
  );
};
