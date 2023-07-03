import React from "react";
import "./styles/Barmanintro.css";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Barman from "./assets/barman.jpg";
import { useNavigate } from "react-router-dom";
import data from "./Data/Barman.json";

export const BarmanIntro = () => {
  const navigate = useNavigate();

  return (
    <div className="sect">
      <div className="containa">
        <div className="content-sect">
          <div className="titl">
            <h1>Barman Training</h1>
          </div>

          <div className="contety">
            {data.map((data, i) => (
              <div key={i}>
                <h3>{data.heading}</h3>

                <p>{data.description}</p>
              </div>
            ))}

            <div className="strt-btn">
              <a onClick={() => navigate("/BarmanTraining")}>Start</a>
            </div>
          </div>
          <div className="icons-medi">
            <a href="#">
              <FaFacebook />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
          </div>
        </div>
        <div className="image-sec">
          <img src={Barman} />
        </div>
      </div>
    </div>
  );
};
