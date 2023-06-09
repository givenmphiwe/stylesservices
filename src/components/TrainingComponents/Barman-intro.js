import React from "react";
import "./styles/Barmanintro.css";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Barman from "./assets/barman.jpg";
import { useNavigate } from "react-router-dom";

import data from "./Data/Barman.json";

export const BarmanIntro = () => {
  const navigate = useNavigate();

  return (
    <div className="sectio">
      <div className="containa">
        <div className="content-sect">
          <div className="titl">
            <h1>Barman Training Intro</h1>
          </div>

          <div className="contety">
            <h3>What is a Bar?</h3>
            {data.introStrings?.map((item, i) => {
              return (
                <p className="list-items" key={i}>
                  {item}
                </p>
              );
            })}

            <h3>What is the importance of Bar Management?</h3>
            {data.ImportanceBarManagement?.map((item, i) => {
              return (
                <p className="list-items" key={i}>
                  {item}
                </p>
              );
            })}

            <div className="strt-btn">
              <a onClick={() => navigate("/Barman-one")}>Start</a>
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
