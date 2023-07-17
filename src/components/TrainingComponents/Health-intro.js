import React from "react";
import "./styles/Barmanintro.css";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import data from "./Data/HealthCare.json";
import Health from "./assets/health.jpg";

export const HealthIntro = () => {
  const navigate = useNavigate();

  return (
    <div className="sect">
      <div className="containa">
        <div className="content-sect">
          <div className="titl">
            <h1>Health Training</h1>
          </div>

          <div className="contety">
            <h3>Communication</h3>

            {data.Communication?.map((item, i) => {
              return (
                <p className="list-items" key={i}>
                  {item}
                </p>
              );
            })}

            <h3>Important</h3>

            {data.Important?.map((item, i) => {
              return (
                <p className="list-items" key={i}>
                  {item}
                </p>
              );
            })}

            <h3>Why communication skills are important</h3>
            {data.SkillImportant?.map((item, i) => {
              return (
                <p className="list-items" key={i}>
                  {item}
                </p>
              );
            })}


            <div className="strt-btn">
              <a onClick={() => navigate("/Health-one")}>Start</a>
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
