import React from "react";
import "../styles/Barmanintro.css";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Housekeeping from "../assets/housekeeping.jpg";
import data from "../Data/Housekeeping.json";
import { useNavigate } from "react-router-dom";

export const HousekeepingThree = () => {
  const navigate = useNavigate();

  return (
    <div className="sectzi">
      <div className="containa">
        <div className="content-sect">
          <div className="titl">
            <h1>Housekeeping Preparing</h1>
          </div>

          <div className="contety">
            <h3>Preparing</h3>

            {data.Preparing?.map((item, i) => {
              return (
                <p className="list-items" key={i}>
                  {item}
                </p>
              );
            })}

            <h3>Cleaning Materials</h3>
            {data.materials?.map((item, i) => {
              return (
                <p className="list-items" key={i}>
                  {item}
                </p>
              );
            })}

            <h3>Knocking and Entering</h3>
            {data.KnockingAndEntering?.map((item, i) => {
              return (
                <p className="list-items" key={i}>
                  {item}
                </p>
              );
            })}

            <h3>Preparing for Cleaning</h3>
            {data.prepareclean?.map((item, i) => {
              return (
                <p className="list-items" key={i}>
                  {item}
                </p>
              );
            })}

            <h3>Cleaning Guest Bedroom Areas</h3>
            {data.GuestBedroom?.map((item, i) => {
              return (
                <p className="list-items" key={i}>
                  {item}
                </p>
              );
            })}
            <div className="strt-btn">
              <a onClick={() => navigate("/Housekeeping-four")}>Next</a>
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
