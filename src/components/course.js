import { useNavigate } from "react-router-dom";
import { FaMarkdown, FaWhatsapp } from "react-icons/fa";
import "./styles/service.css";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import Logo from "../assets/styles-services-logo.png";

export const Course = () => {
  const navigate = useNavigate();
  return (
    <body className="wrapper">
      <h1>Our courses</h1>

      <p>
        We believe that training every 6 months will keep staff well informed
        and motivated to produce more than 5-star service standards. Ongoing
        training and staff support will ensure that high standards are kept.
      </p>

      <div className="content-box">
        <div onClick={() => navigate("/TrainingLandin")} className="card">
          <FaMarkdown />
          <h2>Hotel Training</h2>
          <p>
            This can be minimized through our hotel training and development
            programs. Our hotel training programs will leave your staff inspired
            and equipped with the skills to deliver impeccable service to your
            guests.
          </p>
        </div>

        <div onClick={() => navigate("/TrainingLandin")} className="card">
          <FaMarkdown />
          <h2>Waiter & Waitress Training</h2>
          <p>
            If you are looking for on-site training for your waiters and
            waitresses? Then you are at the right place. Over the years, we have
            trained the best waitrons for small and large restaurants, hotels,
            game lodges, resorts, and other hospitality establishments.
          </p>
        </div>

        <div onClick={() => navigate("/TrainingLandin")} className="card">
          <FaMarkdown />
          <h2>Barman</h2>
          <p>
            Do you want to improve the bar service in your establishment? Then
            you are at the right place. We deliver our bartender training
            on-site/ in-house. Whether you are a hotel, lodge, restaurant,
            lounge or bar, we will help you improve efficiency and increase
            revenue in your bar
          </p>
        </div>

        <div onClick={() => navigate("/TrainingLandin")} className="card">
          <FaMarkdown />
          <h2>Butler Training</h2>
          <p>
            We work shoulder to shoulder with the owner/ manager to maximize the
            value of the investment or asset by applying flexible tailored
            services, flexible remuneration structures, adaptable working
            approaches
          </p>
        </div>

        <div onClick={() => navigate("/TrainingLandin")} className="card">
          <FaMarkdown />
          <h2>Restaurant Front of House Training</h2>
          <p>
            it is important to discuss what front-of-house is in the restaurant
            industry. The front-of-house is where, as a guest, you directly
            experience a restaurant or bar. Every dining room, waiting area,
            table, seat, stool, booth, bar, and any other public part of a
            restaurant is the FOH.
          </p>
        </div>
      </div>

      <footer className="footer-1">
        <div className="row">
          <div className="col">
            <img src={Logo} alt="logo.png"/>
            <p>Styles Services Group</p>
            <p>Hospitality solutions</p>
          </div>

          <div className="col">
            <h3>Office</h3>
            <p>325 Rivonia Boulevard,</p>
            <p>Edenburg, Sandton</p>
            <p className="email-id">
              <FaEnvelope /> info@stylesservicesgr.com
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
                <a onClick={() => navigate("/Service")}>What we do</a>
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
          Styles Services Group &copy; 2023 - All Rights Reserved | Designed by <a href="https://pagefinancialservice.com/">Page Financial Service</a>
        </p>
      </footer>
    </body>
  );
};
