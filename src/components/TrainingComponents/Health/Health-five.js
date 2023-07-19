import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Health from "../assets/health.jpg";
import { useNavigate } from "react-router-dom";
import data from "../Data/HealthCare.json";

export const HealthFive = () => {
  const navigate = useNavigate();

  return (
    <div className="sectionseight">
      <div className="containa">
        <div className="content-sect">
          <div className="titl">
            <h1>Health Training</h1>
          </div>

          <div className="contety">
            <h3>MENTAL ILLINESS</h3>
            {data.MENTALILLINESS?.map((item, i) => {
              return (
                <p className="list-items" key={i}>
                  {item}
                </p>
              );
            })}

            <h3>TUBERCULOSIS</h3>
            {data.TUBERCULOSIS?.map((item, i) => {
              return (
                <p className="list-items" key={i}>
                  {item}
                </p>
              );
            })}
            <div className="image-sec">
              <img src={Health} />
            </div>

            <h3>BODY CARE</h3>
            {data.BODYCARE?.map((item, i) => {
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
