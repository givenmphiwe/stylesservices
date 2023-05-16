import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/contact.css";
import { FaEnvelope, FaMapMarker, FaPhone } from "react-icons/fa";

export const Contact = () => {
  const navigate = useNavigate();

  const [formState, setFormState] = useState({});

  

  const changeHandler = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const config = {
        Host : "smtp.elasticemail.com",
        Username : "pagefinancialservices67@gmail.com",
        Password : "82FE1CC103F33CD8AAB6F7584062ED3827B0",
        To : 'pagefinancialservices67@gmail.com',
        From : formState.email,
        Subject : "Styles Services Group website",
        Body : `${formState.message}`,
        port : 2525,
      }


    if(window.Email){
        window.Email.send(config).then( () => alert("Message sent successfully"))
    }
  }
  return (
    <body>
      <section className="contact">
        <div className="content">
          <h2>Contact us</h2>
          <p></p>
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
                <p>Info@StylesServicesGroup.com</p>
              </div>
            </div>
          </div>

          <div className="contactForm">
            <form onSubmit={submitHandler}>
              <h2>Send Message</h2>
              <div className="inputBox">
                <input type="text" name="" onChange={changeHandler} required />
                <span>Full Name</span>
              </div>
              <div className="inputBox">
                <input type="email" name="" value={formState.email} onChange={changeHandler} required />
                <span>Email</span>
              </div>
              <div className="inputBox">
                <textarea value={formState.message} onChange={changeHandler} required></textarea>
                <span>Type your Message..</span>
              </div>
              <div className="inputBox">
                <input type="submit" name="" />
              </div>
            </form>
          </div>
        </div>
      </section>
    </body>
  );
};
