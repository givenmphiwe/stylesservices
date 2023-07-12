import React from "react";
import data from "../Data/Waiter.json";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Waiter from "../assets/waiter.jpg";
import { useNavigate } from "react-router-dom";


export const WaiterTen = () => {
const navigate = useNavigate();
  
  return (
    <div className="sectionss">
      <div className="containa">
        <div className="content-sect">
          <div className="titl">
            
            <h1>Speed of Service</h1>
          </div>

          <div className="contety">
            <div className="image-sec">
              <img src={Waiter} />
            </div>
            <h3></h3>
            
            <ul>
              {data.SpeedofService?.map((item, i) => {
                return <p className="list-items" key={i}>{item}</p>;
              })}
            </ul>

            <h3>Caring for Upset Customers</h3>
            
            <ul>
              {data.CaringUpsetCustomer?.map((item, i) => {
                return <p className="list-items" key={i}>{item}</p>;
              })}
            </ul>

            <h1>Tips for dealing with table reservtion problems in Restuarants</h1>
            <h3>When the table is not yet ready</h3>
            
            <ul>
              {data.tablenotReady?.map((item, i) => {
                return <p className="list-items" key={i}>{item}</p>;
              })}
            </ul>

            <div className="strt-btn">
              <a onClick={() => navigate("/Waiter-quiz")}>Start quiz</a>
            </div>
            <div className="strt-btn">
              <a onClick={() => navigate("/Waiter-nine")}>Previous</a>
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
