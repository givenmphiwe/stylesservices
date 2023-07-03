import React from "react";
import "./styles/Barmanintro.css";
import data from "./Data/Waiter.json";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Waiter from "./assets/waiter.jpg";

export const WaiterIntro = () => {
  const sampleJSON = {
    "arrOfNumbers": [1, 2, 3, 4],
    "arrOfStrings": ["a", "b", "c", "d"],
    "arrOfObjects": [{ "a": 1, "b": 1 }, { "a": 2, "b": 2 }, { "a": 3, "b": 3 }]
  }
  return (
    <div className="sect">
      <div className="containa">
        <div className="content-sect">
          <div className="titl">
            <h1>Waiter Introduction</h1>
          </div>

          <div className="contety">
            <div className="image-sec">
              <img src={Waiter} />
            </div>
            <h3>Fine Dining sequence of service</h3>
            {/* {data.map((data, i) => (
              <div key={i}>
                <h3>{data.heading}</h3>

                <p>{data.description}</p>
              </div>
            ))} */}
            <ul>
              {data.arrOfStrings?.map((item, i) => {
                return <p className="list-items" key={i}>{item}</p>;
              })}
            </ul>
            
            <div className="strt-btn">
              <a>Start</a>
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
