import React from "react";
import "../styles/Barmanintro.css";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Housekeeping from "../assets/housekeeping.jpg";
import data from "../Data/Housekeeping.json";
import { useNavigate } from "react-router-dom";

export const HousekeepingFour = () => {
  const navigate = useNavigate();

  return (
    <div className="sectz">
      <div className="containa">
        <div className="content-sect">
          <div className="titl">
            <h1>Housekeeping Preparing</h1>
          </div>

          <div className="contety">
            
            <h3>Cleaning Guest Bedroom Areas</h3>
            {data.GuestBedroom?.map((item, i) => {
              return (
                <p className="list-items" key={i}>
                  {item}
                </p>
              );
            })}

            <h3>Cupboards, drawers and shelves</h3>
            {data.CupboardsDrawers?.map((item, i) => {
              return (
                <p className="list-items" key={i}>
                  {item}
                </p>
              );
            })}

            <h3>Guest property</h3>
            {data.GuestProperty?.map((item, i) => {
              return (
                <p className="list-items" key={i}>
                  {item}
                </p>
              );
            })}

            <h3>Replenishing and checking</h3>
            {data.Replenishing?.map((item, i) => {
              return (
                <p className="list-items" key={i}>
                  {item}
                </p>
              );
            })}

            <h3>Cleaning Unoccupied Rooms</h3>
            {data.unoccupiedRoom?.map((item, i) => {
              return (
                <p className="list-items" key={i}>
                  {item}
                </p>
              );
            })}

            <h3>Cleaning of Guest Bathrooms</h3>
            {data.GuestBathroom?.map((item, i) => {
              return (
                <p className="list-items" key={i}>
                  {item}
                </p>
              );
            })}

            <h3>Replenishing Guest Supplies/Complimentary Items</h3>
            {data.ReplenishingGuest?.map((item, i) => {
              return (
                <p className="list-items" key={i}>
                  {item}
                </p>
              );
            })}

            <div className="strt-btn">
              <a onClick={() => navigate("/Housekeeping-five")}>Next</a>
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
