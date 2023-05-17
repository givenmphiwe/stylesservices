import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/home.css";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import DrinksImg from "../assets/Glass-wine.jpg";
import Logo from "../assets/styles-services-logo.png";
import Drink from "../assets/Drink.jpg";
import palm from "../assets/Our-partners/palm_continental_hotel.jpg";
import blades from "../assets/Our-partners/the_blades_hotel.jpg";
import birchwood from "../assets/Our-partners/birchwood_logo.png";
import brytech from "../assets/Our-partners/brytech_holdings.jpg";
import TrainingImg from "../assets/glass-row_.jpg"
import CourseImg from "../assets/Training_.jpg"
import placementimg from "../assets/placement_.jpg"
 

export const Home = () => {
  const navigate = useNavigate();

  const [Mobile, setMobile] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="container">
          <img className="Logo-img" src={Logo} alt="styles-service-logo.png" />

          <ul
            className={Mobile ? "nav-links-mobile" : "nav-links"}
            onClick={() => setMobile(false)}
          >
            <li onClick={() => navigate("Training")}>Training</li>
            <li onClick={() => navigate("Course")}>Courses</li>
            <li onClick={() => navigate("About")}>About-us</li>
            <li onClick={() => navigate("Service")}>services</li>
          </ul>

          <button
            className="mobile-menu-icon"
            onClick={() => setMobile(!Mobile)}
          >
            {/* {Mobile ? <ImCross /> : <FaBars />} */}
          </button>
        </div>
      </nav>

      <div className="container-2">
        <img className="Drink-img" src={DrinksImg} alt="" />
        <p className="Styles-text">STYLES SERVICES GROUP</p>
        <p className="hospitality-text">Hospitality Solutions</p>
        <p className="ContactUs-btn" onClick={() => navigate("contact")}>
          Contact us
        </p>
      </div>

      <div className="container-1">
        {/* <div className="wrapper">
          <img className="img-txt" src={Drink} alt="" />
          <div className="text-box">
              <h2>Align Image & Text Aside</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur Lorem ipsum dolor sit
                waedso jkerne edfleke ceoew cjewfm ewo
              </p>
            </div>
          </div> */}
        <div className="wrapper">
          <img className="img-txt" src={Drink} alt="" />
          <div className="text-box">
            <h2>We have something important to say to you</h2>
            <p>
              SSG - Styles Services Group Hospitality Solutions Company is the
              largest supplier of full service solutions to the Hospitality
              industry, In South Africa and we are famous for the quality of our
              staff. Our commitment to providing the best services to stand out
              in the industry with our service.
              <br />
              In need of staff/employees for hospilitay, look no further we have
              it all from
              <b> Waiters, Barman, Waitress, Housekeepers etc </b>
              <br />
              we will make a difference to your business,We proud ourselves with
              staff that is well trained and professional.
            </p>
          </div>
        </div>
      </div>

      <h1 className="best-txt">
        SSG Rockstars are the cream of crop and have been specially trained in
        all aspects of Butler service. Our Clients rave about them.
      </h1>

      <div className="container-3">
        <div className="content-section">
          <div onClick={() => navigate("/placement")}  className="card">
            <img src={placementimg } alt="drink.jpg" />
            <h2>Placement Specialist</h2>
            <p>
              SSG started serving the industry in 2014, Now we placed employees
              of more than 5K staff in various hotels
            </p>
          </div>

          <div onClick={() => navigate("/Course")}  className="card">
            <img  src={CourseImg} alt="drink.jpg" />
            <h2>Courses</h2>
            <p>
              Passionately Embracing Hospitality Education And Training Through
              Innovation and Distinction Is the motto of success
            </p>
          </div>

          <div onClick={() => navigate("/Service")} className="card">
            <img src={Drink} alt="drink.jpg" />
            <h2>Our services</h2>
            <p>
              We provide 5 Star Hotels, Top South African Corporates, Event
              Companies, Casinos, Restaurants and anything Hospitality.
            </p>
          </div>

          <div onClick={() => navigate("/Training")} className="card">
            <img src={TrainingImg } alt="drink.jpg" />
            <h2>Training</h2>
            <p>
              We believe in everyone can make change.Are you in need of
              employment? SSG training equips you to be succesful in hospitality
              industry
            </p>
          </div>
        </div>
      </div>

      <div className="bigimage">
        <div className="overlay">
          <h1>Our Value and Mission</h1>
          <p>
            To deliver high-quality service and training for the tourism &
            hospilitay businesses that are flexible, cost effective and
            scalable.To provide services to{" "}
            <b>B&B, Restaurants, Lodge, Hotel, Resort.</b>etc
            
            <br />
            Mission to provide hospitality business owners and managers turn
            their businesses around, whether it be through improved operations
            and processes, financials and cost saving measures ot staff training
            and development. Talk to us today and let us take your business to
            the next level.
          </p>
        </div>
      </div>

      <div className="container-4">
        <div className="client-wrap">
          <h1>Our partners</h1>
          <hr />

          <div className="client-in">
            <ul>
              
              
              <li>
                <img src={blades} alt="" />
                <img className="nothin" src={blades} alt="" />
              </li>
              <li>
                <img src={palm} alt="" />
                <img className="nothin" src={palm} alt="" />
              </li>
              <li>
                <img src={brytech} alt="" />
                <img className="nothin" src={brytech} alt="" />
              </li>
              <li>
                <img src={birchwood} alt="" />
                <img className="nothin" src={birchwood} alt="" />
              </li>
              
            </ul>
          </div>
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
            <p className="email-id"><FaEnvelope/>  info@stylesservices.com</p>
            <h4><FaPhone/> +27 84 602 3144</h4>
          </div>
          <div className="col">
            <h3>Quick Links</h3>
            <ul>
              <li className="link-s">
                <a onClick={() => navigate("Service")}>What we do</a>
              </li>
              <li className="link-s">
                <a onClick={() => navigate("About")}>Who we are</a>
              </li>
              <li className="link-s">
                <a onClick={() => navigate("Training")}>Training</a>
              </li>
              <li className="link-s">
                <a onClick={() => navigate("Contact")}>Contact us</a>
              </li>
            </ul>
          </div>
          <div className="col">
            <h3>Social media</h3>
            <div className="social-icons">
              <a href="https://www.facebook.com/stylesservicesgroup" className="fab">
                <FaFacebook />
              </a>
              <a href="https://www.linkedin.com/company/stylesservicesgroup/" className="fab">
                <FaLinkedin />
              </a>
              <a href="https://instagram.com/stylesservicesgroup/" className="fab">
                <FaInstagram />
              </a>
              <a href="https://twitter.com/styles_services" className="fab">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
        <hr />
        <p className="copyright">
          Styles Services Group &copy; 2023 - All Rights Reserved | Designed by <a href="">Page Financial Service</a>
        </p>
      </footer>
    </>
  );
};
