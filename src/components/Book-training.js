import React, { useState } from "react";
import "./styles/Book-training.css";
import { FaEnvelope, FaMapMarker, FaPhone } from "react-icons/fa";

export const Booktraining = () => {
  

  const [formState, setFormState] = useState({});

  const changeHandler = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const config = {
      Host: "smtp.elasticemail.com",
      Username: "pagefinancialservices67@gmail.com",
      Password: "82FE1CC103F33CD8AAB6F7584062ED3827B0",
      To: "info@stylesservicesgr.com",
      From: formState.email,
      Subject: "Styles Services Group website",
      Body: `${formState.message}`,
      port: 2525,
    };

    if (window.Email) {
      window.Email.send(config).then(() => alert("Message sent successfully"));
    }
  };
  return (
    <body>
      <section className="contact-1">
        <div className="content">
          <h2>Enquire for training</h2>
          <p>
            Speak to one of our consultant to learn more how the training at
            styles Services Group works. How we will help you get started in the
            hospitality career with our very well prepared training program to
            equip you to be ready for the field. <br />
            We don't just train you, we hold your hand till you are placed in
            one of our partners hotel/Restaurant,where you will be employed as
            waiter/waitress, chef, barman etc <br />
            <b>That's what makes us the best in the field</b>{" "}
          </p>
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
            <form onSubmit={submitHandler}>
              <h2>Send Message</h2>
              <div className="inputBox">
                <input type="text" name="" onChange={changeHandler} required />
                <span>Full Name</span>
              </div>
              <div className="inputBox">
                <input
                  type="email"
                  name=""
                  value={formState.email}
                  onChange={changeHandler}
                  required
                />
                <span>Email</span>
              </div>
              <div className="inputBox">
                <textarea
                  value={formState.message}
                  onChange={changeHandler}
                  required
                ></textarea>
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
