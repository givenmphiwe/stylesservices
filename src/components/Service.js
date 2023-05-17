import { useNavigate } from "react-router-dom";
import { FaMarkdown, FaWhatsapp } from "react-icons/fa";
import React, { useState } from "react";
import Logo from "../assets/styles-services-logo.png";
import "./styles/Training.css";
import "./styles/service.css";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";

export const Services = () => {
  const navigate = useNavigate();
  const [Mobile, setMobile] = useState(false);

  return (
    <>
      {/* <nav className="navbar">
        <div className="container">
          <img className="Logo-img" src={Logo} alt="styles-service-logo.png" />

          <ul
            className={Mobile ? "nav-links-mobile" : "nav-links"}
            onClick={() => setMobile(false)}
          >
            <li onClick={() => navigate("/Course")}>Courses</li>
            <li onClick={() => navigate("/About")}>About</li>
            <li onClick={() => navigate("/Training")}>Training</li>
          </ul>

          <button
            className="mobile-menu-icon"
            onClick={() => setMobile(!Mobile)}
          >
            {/* {Mobile ? <ImCross /> : <FaBars />} */}
      {/* </button>
        </div>
      </nav>

      <div className="container-22">
        <img className="Drink-img" src={ssg} alt="" />
        <p className="Styles-text">SSG</p>
        <p className="hospitality-text">Hospitality Training</p>
        <p className="ContactUs-btn" onClick={() => navigate("/Contact")}>
          Contact us
        </p>
      </div> */}
      <body className="wrapper">
        <h1>Our service</h1>

        <p>
          Our Number one priority in Styles Services Group is to provide the
          best service for you .We provide hotel,lodges,Restaurants and many
          more with stuff to assist their stuff in the field and also train
          young people with great skills with to be qualified in hospitality
          industry
        </p>

        <div className="content-box">
          <div className="card">
            <FaMarkdown />
            <h2>HOSPITALITY</h2>
            <p>
              If you are looking for on-site training for your waiters and
              waitresses? Then you are at the right place.
            </p>
          </div>

          <div className="card">
            <FaMarkdown />
            <h2>HYGEINE</h2>
            <p>
              We customise our approach to a client's unique needs. We are
              committed only to supply environmentally friendly, food safe
              chemicals.{" "}
            </p>
          </div>

          <div className="card">
            <FaMarkdown />
            <h2>HEALTH CARE</h2>
            <p>
              WE are one of the largest nursing agencies in the country and a
              preferred supplier of medical staff to the largest hospital and
              clinic chains
            </p>
          </div>

          <div className="card">
            <FaMarkdown />
            <h2>Placement Specialist</h2>
            <p>
              Our ability to create, design and implement various programs that
              directly impact your employees in a fun, down-to-earth environment
              that drives guest repeatability and employee retention while
              working alongside the restaurant owner's objectives.f
            </p>
          </div>

          <div className="card">
            <FaMarkdown />
            <h2>Training for your Staff</h2>
            <p>
              We walk the journey with you and work hand-in-hand to identify
              current training needs and deliver the same. As a hotel, you need
              to set a budget for staff training and development, not only
              because there's high staff turnover in the hospitality field
            </p>
          </div>
        </div>

        <footer className="footer-1">
          <div className="row">
            <div className="col">
              <img src={Logo} />
              <p>Styles Services Group</p>
              <p>Hospitality solutions</p>
            </div>

            <div className="col">
              <h3>Office</h3>
              <p>325 Rivonia Boulevard,</p>
              <p>Edenburg, Sandton</p>
              <p className="email-id">
                <FaEnvelope /> info@stylesservices.com
              </p>
              <h4>
                <FaPhone /> +27 84 602 3144
              </h4>
            </div>
            <div className="col">
              <h3>Links</h3>
              <ul>
                <li className="link-s">
                  <a onClick={() => navigate("/")}>Home</a>
                </li>
                <li className="link-s">
                  <a onClick={() => navigate("/About")}>Who we are?</a>
                </li>
                <li className="link-s">
                  <a onClick={() => navigate("/Training")}>Training</a>
                </li>
                <li className="link-s">
                  <a onClick={() => navigate("/Contact")}>Contact us</a>
                </li>
              </ul>
            </div>
            <div className="col">
              <h3>Social media</h3>
              <div className="social-icons">
                <a
                  href="https://www.facebook.com/stylesservicesgroup"
                  className="fab"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://www.linkedin.com/company/stylesservicesgroup/"
                  className="fab"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://instagram.com/stylesservicesgroup/"
                  className="fab"
                >
                  <FaInstagram />
                </a>
                <a href="https://twitter.com/styles_services" className="fab">
                  <FaTwitter />
                </a>
                <a href="https://api.whatsapp.com/send?phone=+27%2084%20602%203144&text=Hi%20STYLES%20SERVICES%20GROUP%20(PTY)%20LTD,%20I%20contacted%20you%20through%20your%20website.%20I%20need" className="fab">
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          </div>
          <hr />
          <p className="copyright">
            Styles Services Group &copy; 2023 - All Rights Reserved | Designed
            by <a href="">Page Financial Service</a>
          </p>
        </footer>
      </body>
    </>
  );
};
