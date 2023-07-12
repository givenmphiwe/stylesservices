import React from "react";
import data from "../Data/Waiter.json";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Waiter from "../assets/waiter.jpg";
import { useNavigate } from "react-router-dom";


export const WaiterNine = () => {
const navigate = useNavigate();
  
  return (
    <div className="sectionsssss">
      <div className="containa">
        <div className="content-sect">
          <div className="titl">
            
            <h1>Restaurant Service Training</h1>
          </div>

          <div className="contety">
            <div className="image-sec">
              <img src={Waiter} />
            </div>
            <h3>Handling guest complaints and Problem in Restaurant / Coffee shop</h3>
            
            <ul>
              {data.GuestComplaintsStrings?.map((item, i) => {
                return <p className="list-items" key={i}>{item}</p>;
              })}
            </ul>

            <h3>Apologizing and taking action as per issue:</h3>
            
            <ul>
              {data.ApologizingAndTakingActionStrings?.map((item, i) => {
                return <p className="list-items" key={i}>{item}</p>;
              })}
            </ul>

            <h3>About the service</h3>
            
            <ul>
              {data.Aboutservice?.map((item, i) => {
                return <p className="list-items" key={i}>{item}</p>;
              })}
            </ul>

            <h3>About the air-conditioning</h3>
            
            <ul>
              {data.AboutAirconditon?.map((item, i) => {
                return <p className="list-items" key={i}>{item}</p>;
              })}
            </ul>

            <h3>About the table</h3>
            
            <ul>
              {data.Abouttable?.map((item, i) => {
                return <p className="list-items" key={i}>{item}</p>;
              })}
            </ul>

            <h3>Spillages and Breakages</h3>
            <ul>
              {data.Spillageandbreakages?.map((item, i) => {
                return <p className="list-items" key={i}>{item}</p>;
              })}
            </ul>

            <div className="strt-btn">
              <a onClick={() => navigate("/Waiter-ten")}>Next</a>
            </div>
            <div className="strt-btn">
              <a onClick={() => navigate("/Waiter-eight")}>Previous</a>
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
