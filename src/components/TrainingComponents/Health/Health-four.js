import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Health from "../assets/health.jpg";
import { useNavigate } from "react-router-dom";
import data from "../Data/HealthCare.json";

export const HealthFour = () => {
  const navigate = useNavigate();

  return (
    <div className="sectionseight">
      <div className="containa">
        <div className="content-sect">
          <div className="titl">
            <h1>Health Training</h1>
          </div>

          <div className="contety">
            <h3>PRKINSON'S DISEASE</h3>
            {data.PRKINSON?.map((item, i) => {
              return (
                <p className="list-items" key={i}>
                  {item}
                </p>
              );
            })}

            <h3>CONSTIPATION</h3>
            {data.CONSTIPATION?.map((item, i) => {
              return (
                <p className="list-items" key={i}>
                  {item}
                </p>
              );
            })}

            <h3>DIABETES</h3>
            {data.DIABETES?.map((item, i) => {
              return (
                <p className="list-items" key={i}>
                  {item}
                </p>
              );
            })}

            <h3>Diabetic's food problems</h3>
            {data.DIABETESFOOD?.map((item, i) => {
              return (
                <p className="list-items" key={i}>
                  {item}
                </p>
              );
            })}

            <h3>CANCER</h3>
            {data.CANCER?.map((item, i) => {
              return (
                <p className="list-items" key={i}>
                  {item}
                </p>
              );
            })}

            <h3>BRAIN ATTACK/STROKE</h3>
            {data.BRAINATTACK?.map((item, i) => {
              return (
                <p className="list-items" key={i}>
                  {item}
                </p>
              );
            })}

            <div className="strt-btn">
              <a onClick={() => navigate("/Health-five")}>Next</a>
            </div>

            <div className="strt-btn">
              <a onClick={() => navigate("/Health-three")}>Back</a>
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
