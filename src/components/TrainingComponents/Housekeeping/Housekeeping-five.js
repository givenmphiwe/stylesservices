import React from "react";
import "../styles/Barmanintro.css";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Housekeeping from "../assets/housekeeping.jpg";
import data from "../Data/Housekeeping.json";
import { useNavigate } from "react-router-dom";

export const HousekeepingFive = () => {
  const navigate = useNavigate();

  return (
    <div className="sectionss">
      <div className="containa">
        <div className="content-sect">
          <div className="titl">
            <h1>Complete the Cleaning of the Guest Bedroom Area</h1>
            
          </div>

          <div className="contety">
            <h3>Once you have completed the cleaning of the bedroom area and bathroom, you need to do a final check of your work:</h3>
            
            {data.GuestBedroomArea?.map((item, i) => {
              return (
                <p className="list-items" key={i}>
                  {item}
                </p>
              );
            })}

            <div className="strt-btn">
              <a onClick={() => navigate("/Housekeeping-quiz")}>Start Assesment</a>
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
