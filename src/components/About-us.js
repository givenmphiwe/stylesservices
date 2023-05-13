import { useNavigate } from "react-router-dom";
import "./styles/About.css";
import Styles from "../assets/styles-services-logo.png";

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
    </body>
  );
};
