import React from "react";
import "./styles/Barmanintro.css";
import data from "./Data/Waiter.json";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Waiter from "./assets/waiter.jpg";
import { useNavigate } from "react-router-dom";

export const WaiterIntro = () => {
  const navigate = useNavigate();

  return (
    <div className="sectionss">
      <div className="containa">
        <div className="content-sect">
          <div className="titl">
          <h1>STYLES TRAINING ACADEMY</h1>

            <h1>Waiter Training</h1>
          </div>

          <div className="contety">
            <div className="image-sec">
              <img src={Waiter} />
            </div>
            <h3>Presenting the menu</h3>

            <ul>
              {data.introStrings?.map((item, i) => {
                return (
                  <p className="list-items" key={i}>
                    {item}
                  </p>
                );
              })}
            </ul>

            <div className="strt-btn">
              <a onClick={() => navigate("/Waiter-one")}>Start</a>
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
      </div>
    </div>
  );
};
