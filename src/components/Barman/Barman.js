import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Barman from "../TrainingComponents/assets/barman.jpg";
import { useNavigate } from "react-router-dom";
import data from "../TrainingComponents/Data/Barman.json";

export const BarmanOne = () => {
  const navigate = useNavigate();

  return (
    <div className="sectionsONE">
      <div className="containa">
        <div className="content-sect">
          <div className="titl">
            <h1>Types of Beer Available </h1>
          </div>

          <div className="contety">
            <h3>Ales</h3>
            {data.Ales?.map((item, i) => {
              return (
                <p className="list-items" key={i}>
                  {item}
                </p>
              );
            })}

            <h3>Lagers</h3>
            {data.Lagers?.map((item, i) => {
              return (
                <p className="list-items" key={i}>
                  {item}
                </p>
              );
            })}

            <h1>Beer Types and Their Characteristics</h1>
            <h3>Sour Beer</h3>
            {data.SourBeer?.map((item, i) => {
              return (
                <p className="list-items" key={i}>
                  {item}
                </p>
              );
            })}

            <h3>Cloudy Beer</h3>
            {data.CloudyBeer?.map((item, i) => {
              return (
                <p className="list-items" key={i}>
                  {item}
                </p>
              );
            })}

            <h1>Popular Brand Names of Beer</h1>
            {data.PopularBrands?.map((item, i) => {
              return (
                <p className="list-items" key={i}>
                  {item}
                </p>
              );
            })}

            <div className="strt-btn">
              <a onClick={() => navigate("/Barman-two")}>Next</a>
            </div>

            <div className="strt-btn">
              <a onClick={() => navigate("/Barmanintro")}>Back</a>
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
          <img src={Barman} />
        </div>
      </div>
    </div>
  );
};
