import React from "react";
import "../styles/Barmanintro.css";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Hygeine from "../assets/hygeine.jpg";
import { useNavigate } from "react-router-dom";
import data from "../Data/Hygeine.json";

export const HygeineOne = () => {
  const navigate = useNavigate();

  return (
    <div className="sectionseight">
      <div className="containa">
        <div className="content-sect">
          <div className="titl">
            <h1>Hygeine Training</h1>
          </div>

          <div className="contety">
            <h3>Personal hygeine</h3>

            {data.Personal?.map((item, i) => {
              return (
                <p className="list-items" key={i}>
                  {item}
                </p>
              );
            })}

            <h3>Hygiene of internal ear canals</h3>

            {data.earCanal?.map((item, i) => {
              return (
                <p className="list-items" key={i}>
                  {item}
                </p>
              );
            })}

            <h3>Oral hygiene</h3>

            {data.Oralhygeine?.map((item, i) => {
              return (
                <p className="list-items" key={i}>
                  {item}
                </p>
              );
            })}

            <h3>Sleep hygiene</h3>

            {data.Sleephygeine?.map((item, i) => {
              return (
                <p className="list-items" key={i}>
                  {item}
                </p>
              );
            })}

            <h3>Personal care services hygiene</h3>
            {data.PersonalCarehygeine?.map((item, i) => {
              return (
                <p className="list-items" key={i}>
                  {item}
                </p>
              );
            })}

            <h1>Hygiene hypothesis and allergies</h1>
            {data.Hypothesishygeine?.map((item, i) => {
              return (
                <p className="list-items" key={i}>
                  {item}
                </p>
              );
            })}

            <h3>Medical hygiene</h3>
            {data.Medicalhygeine?.map((item, i) => {
              return (
                <p className="list-items" key={i}>
                  {item}
                </p>
              );
            })}
            <div className="image-sec">
              <img src={Hygeine} />
            </div>

            <h3>Food hygiene</h3>
            {data.Foodhygiene?.map((item, i) => {
              return (
                <p className="list-items" key={i}>
                  {item}
                </p>
              );
            })}

            <div className="strt-btn">
              <a onClick={() => navigate("/Hygeine-one")}>Start Quiz</a>
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
