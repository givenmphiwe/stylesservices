import { useNavigate } from "react-router-dom";
import "./styles/About.css";
import Styles from "../assets/styles-services-logo.png";
import {
  FaBars,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";


export const About = () => {
  const navigate = useNavigate();
  return (
    <body>
      <div className="heading">
        <h1>About Us</h1>
        <p>
          Styles services was design in way thtat tit helps solve problems we
          are having in South africa
        </p>
      </div>
      <section className="about-us">
        <img src={Styles} />
        <div className="content">
          <h2>Styles Services Group</h2>
          <p>
            Lorem ipsum dolor sit sfanifdiewnf vfew rj fnc ewfioujferwijewf
            ewfjnfe lkjkjijogjojireofj werforeowkiroewijt femirweoijgirew rewg
            rewgwge fewfewfrewrtreer
          </p>

          <button className="contact-us-btn" onClick={() => navigate("contact")}>Contact Us</button>
        </div>
      </section>

      <div className="team-section">
        <div className="container">
          <div className="row">
            <div className="title">
              <h1>Our team</h1>
              <p>Lorem ipsum sjdne ekwnf fewkjnr refkjr rfjkref fewflkf</p>
            </div>
          </div>

          <div className="team-card">
            <div className="card">
              <div className="image-section">
                <img src="" />
              </div>
              <div className="content-1">
                <h3>Lichelle Mpofu</h3>
                <h2>Founder</h2>
                <p>Lorem dedneui ewfkjfen ewfjkef fewjknfejnef</p>
              </div>
            </div>

            <div className="card">
              <div className="image-section">
                <img src="" />
              </div>
              <div className="content-1">
                <h3>Dutch</h3>
                <h2>Managing Director</h2>
                <p>Lorem dedneui ewfkjfen ewfjkef fewjknfejnef</p>
              </div>

            </div>
          </div>
        </div>
      </div>

      <footer className="footer-1">
          <div className="row">
            <div className="col">
              <img src=""/>
              <p>Subcribe Easy with ssg the world hospilitay</p>
            </div>

          <div className="col">
            <h3>Office</h3>
            <p>BLVD Road</p>
            <p>Rivinia AHS</p>
            <p className="email-id">EMAil.com</p>
            <h4>+27-714675197</h4>
          </div>
          <div className="col">
            <h3>Links</h3>
            <ul>
              <li className="link-s"><a onClick={() => navigate("/")}>Home</a></li>
              <li className="link-s"><a onClick={() => navigate("Service")}>Services</a></li>
              <li className="link-s"><a onClick={() => navigate("Training")}>Training</a></li>
              <li className="link-s"><a onClick={() => navigate("Contact")}>Contact us</a></li>
            </ul>
          </div>
          <div className="col">
            <h3>Social media</h3>
            <div className="social-icons">
              
                <a className="fab"><FaFacebook/></a>
                <a className="fab"><FaLinkedin/></a>
                <a className="fab"><FaInstagram/></a>
                <a className="fab"><FaTwitter/></a>
              
            </div>
          </div>
          </div>
          <hr/>
          <p className="copyright">Styles Services Group &copy; 2023 - All Rights Reserved</p>
        </footer>
    </body>
  );
};
