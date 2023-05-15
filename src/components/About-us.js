import { useNavigate } from "react-router-dom";
import "./styles/About.css";
import Styles from "../assets/styles-services-logo.png";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";


export const About = () => {
  const navigate = useNavigate();
  return (
    <body>
      <div className="heading">
        <h1>About Us</h1>
        <p>
          Styles services was design in way that it helps solve problems we
          are having in South africa
        </p>
      </div>
      <section className="about-us">
        <img src={Styles} />
        <div className="content">
          <h2>Styles Services Group</h2>
          <p>
            To deliver high-quality service and training for the tourism &
            hospilitay businesses that are flexible, cost effective and
            scalable.To provide services to{" "}
            <b>B&B, Restaurants, Lodge, Hotel, Resort.</b>etc
            <br />
            <br />
            Mission to provide hospitality business owners and managers turn
            their businesses around, whether it be through improved operations
            and processes, financials and cost saving measures ot staff training
            and development. Talk to us today and let us take your business to
            the next level.
          </p>

          <button className="contact-us-btn" onClick={() => navigate("/Contact")}>Contact Us</button>
        </div>
      </section>

      <div className="team-section">
        <div className="container">
          <div className="row">
            <div className="title">
              <h1>Our team</h1>
              <p>There are no secrets to sucess,It is the results of preparation, hard work,and learning from setbacks</p>
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
                <h3>Collen Dutch Maje</h3>
                <h2>Managing Director</h2>
                <p>Lorem dedneui ewfkjfen ewfjkef fewjknfejnef</p>
              </div>

            </div>

            <div className="card">
              <div className="image-section">
                <img src="" />
              </div>
              <div className="content-1">
                <h3>Andrew Mkhulumeli Ngwenya</h3>
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
              <p>Styles Services Group</p>
            <p>Hospitality solutions</p>
          </div>

          <div className="col">
            <h3>Office</h3>
            <p>325 Rivonia Boulevard,</p>
            <p>Edenburg, Sandton</p>
            <p className="email-id"><FaEnvelope/>  Info@StylesServices.com</p>
            <h4><FaPhone/> +27 84 602 3144</h4>
          </div>
          <div className="col">
            <h3>Links</h3>
            <ul>
              <li className="link-s"><a onClick={() => navigate("/")}>Home</a></li>
              <li className="link-s"><a onClick={() => navigate("/Service")}>Services</a></li>
              <li className="link-s"><a onClick={() => navigate("/Training")}>Training</a></li>
              <li className="link-s"><a onClick={() => navigate("/Contact")}>Contact us</a></li>
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
