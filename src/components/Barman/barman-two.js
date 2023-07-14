import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Barman from "../TrainingComponents/assets/barman.jpg";
import { useNavigate } from "react-router-dom";
import data from "../TrainingComponents/Data/Barman.json";

export const BarmanTwo = () => {
  const navigate = useNavigate();

  return (
    <div className="sectionsfive">
      <div className="containa">
        <div className="content-sect">
          <div className="titl">
            <h1>How to Serve Beer in a Restaurant</h1>
          </div>

          <div className="contety">
            <h3>Points should be kept in mind while serving beer</h3>
            {data.ServeBeerRestuarant?.map((item, i) => {
              return (
                <p className="list-items" key={i}>
                  {item}
                </p>
              );
            })}

            <h3>Service Procedure of Beer in Restaurants</h3>
            {data.ServiceBeerRestuarant?.map((item, i) => {
              return (
                <p className="list-items" key={i}>
                  {item}
                </p>
              );
            })}

            <div className="image-sec">
              <img src={Barman} />
            </div>

            <h3>The types of glasses used for the beer service are</h3>
            {data.BeerServiceAre?.map((item, i) => {
              return (
                <p className="list-items" key={i}>
                  {item}
                </p>
              );
            })}

            <h3>I.e</h3>
            {data.Bartenders?.map((item, i) => {
              return (
                <p className="list-items" key={i}>
                  {item}
                </p>
              );
            })}

            <h3>Taking Orders as Bartender</h3>
            {data.TakeOrders?.map((item, i) => {
              return (
                <p className="list-items" key={i}>
                  {item}
                </p>
              );
            })}

            <div className="strt-btn">
              <a onClick={() => navigate("")}>Start Quiz</a>
            </div>

            <div className="strt-btn">
              <a onClick={() => navigate("/Barman-one")}>Back</a>
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
