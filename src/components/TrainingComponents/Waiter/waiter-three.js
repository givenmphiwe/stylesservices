import React from "react";
import data from "../Data/Waiter.json";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Waiter from "../assets/waiter.jpg";
import { useNavigate } from "react-router-dom";


export const WaiterThree = () => {
const navigate = useNavigate();
  
  return (
    <div className="sect">
      <div className="containa">
        <div className="content-sect">
          <div className="titl">
            <h1>Waiter Training</h1>
          </div>

          <div className="contety">
            <div className="image-sec">
              <img src={Waiter} />
            </div>
            <h3>Menu Present service standards</h3>
            
            <ul>
              {data.PresentmenuStrings?.map((item, i) => {
                return <p className="list-items" key={i}>{item}</p>;
              })}
            </ul>

            <div className="strt-btn">
              <a onClick={() => navigate("/Waiter-two")}>Next</a>
            </div>
            <div className="strt-btn">
              <a onClick={() => navigate("/Waiter-one")}>Previous</a>
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
