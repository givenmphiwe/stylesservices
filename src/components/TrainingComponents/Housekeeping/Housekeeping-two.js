import React from "react";
import "../styles/Barmanintro.css";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Housekeeping from "../assets/housekeeping.jpg";
import data from "../Data/Housekeeping.json";
import { useNavigate } from "react-router-dom";

export const HousekeepingTwo = () => {
  const navigate = useNavigate();

  return (
    <div className="sectionss">
      <div className="containa">
        <div className="content-sect">
          <div className="titl">
            <h1>Housekeeping Training</h1>
          </div>

          <div className="contety">
            <h3>Role of Housekeeping</h3>

            {data.Role?.map((item, i) => {
              return (
                <p className="list-items" key={i}>
                  {item}
                </p>
              );
            })}

            <h3>Hotel Housekeeping</h3>

            {data.HotelHousekeeping?.map((item, i) => {
              return (
                <p className="list-items" key={i}>
                  {item}
                </p>
              );
            })}

            <h3>Steps to a hotel room</h3>
            {data.steps?.map((item, i) => {
              return (
                <p className="list-items" key={i}>
                  {item}
                </p>
              );
            })}
            
            <div className="strt-btn">
              <a onClick={() => navigate("/Housekeeping-one")}>Next</a>
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
          <img src={Housekeeping} />
        </div>
      </div>
    </div>
  );
};
