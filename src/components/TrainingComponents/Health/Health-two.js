import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Health from "../assets/health.jpg";
import { useNavigate } from "react-router-dom";
import data from "../Data/HealthCare.json";

export const HealthTwo = () => {
  const navigate = useNavigate();

  return (
    <div className="sectionsONE">
      <div className="containa">
        <div className="content-sect">
          <div className="titl">
            <h1>Health Training</h1>
          </div>

          <div className="contety">
            

            <h3>Observations you can make: </h3>
            {data.Observation?.map((item, i) => {
              return (
                <p className="list-items" key={i}>
                  {item}
                </p>
              );
            })}

            <div className="strt-btn">
              <a onClick={() => navigate("/Health-three")}>Next</a>
            </div>

            <div className="strt-btn">
              <a onClick={() => navigate("/Health-one")}>Back</a>
            </div>
          </div>
          <div className="icons-medi">
            <a href="https://www.facebook.com/stylesservicesgroup">
              <FaFacebook />
            </a>
            <a href="https://twitter.com/styles_services">
              <FaTwitter />
            </a>
            <a href="https://instagram.com/stylesservicesgroup/">
              <FaInstagram />
            </a>
          </div>
        </div>
        <div className="image-sec">
          <img src={Health} />
        </div>
      </div>
    </div>
  );
};
