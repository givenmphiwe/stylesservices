import React from "react";
import "./styles/Barmanintro.css";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Hygeine from "./assets/hygeine.jpg";
import { useNavigate } from "react-router-dom";
import data from "./Data/Hygeine.json";

export const HygeineIntro = () => {
  const navigate = useNavigate();

  return (
    <div className="sect">
      <div className="containa">
        <div className="content-sect">
          <div className="titl">
            <h1>Hygeine Introduction</h1>
          </div>

          <div className="contety">
            <h3>Hygiene</h3>

            {data.intro?.map((item, i) => {
              return (
                <p className="list-items" key={i}>
                  {item}
                </p>
              );
            })}

            <div className="strt-btn">
              <a onClick={() => navigate("/Hygeine-one")}>Start</a>
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
          <img src={Hygeine} />
        </div>
      </div>
    </div>
  );
};
