import React from "react";
import data from "../Data/Waiter.json";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Waiter from "../assets/waiter.jpg";
import { useNavigate } from "react-router-dom";


export const WaiterEight= () => {
const navigate = useNavigate();
  
  return (
    <div className="..sect">
      <div className="containa">
        <div className="content-sect">
          <div className="titl">
            <h1>Restaurant Service Training</h1>
          </div>

          <div className="contety">
            <div className="image-sec">
              <img src={Waiter} />
            </div>
            <h3>Seating Guest and Taking Reservations in the Restaurant</h3>
            
            <ul>
              {data.SeatingGuestString?.map((item, i) => {
                return <p className="list-items" key={i}>{item}</p>;
              })}
            </ul>

            <h3>Exceptional Quality</h3>
            
            <ul>
              {data.ExceptionalQualityString?.map((item, i) => {
                return <p className="list-items" key={i}>{item}</p>;
              })}
            </ul>

            <h3>Food Quality</h3>
            
            <ul>
              {data.FoodQualityString?.map((item, i) => {
                return <p className="list-items" key={i}>{item}</p>;
              })}
            </ul>

            <h3>Quality Atmosphere</h3>
            
            <ul>
              {data.QualityAtmosphereString?.map((item, i) => {
                return <p className="list-items" key={i}>{item}</p>;
              })}
            </ul>

            <h3>Memorable Service</h3>
            
            <ul>
              {data.MemorableServiceString?.map((item, i) => {
                return <p className="list-items" key={i}>{item}</p>;
              })}
            </ul>

            <h3>How to Speak with customers</h3>
            
            <ul>
              {data.SpeakwithCustomerString?.map((item, i) => {
                return <p className="list-items" key={i}>{item}</p>;
              })}
            </ul>
            <div className="image-sec">
              <img src={Waiter} />
            </div>
            <h3>How to Answer the phone in Busy Situation</h3>
            
            <ul>
              {data.AnswerPhoneInBusyString?.map((item, i) => {
                return <p className="list-items" key={i}>{item}</p>;
              })}
            </ul>

            <h3>How to Serve and Clear Food</h3>
            
            <ul>
              {data.ServeClearFoodString?.map((item, i) => {
                return <p className="list-items" key={i}>{item}</p>;
              })}
            </ul>

            <div className="image-sec">
              <img src={Waiter} />
            </div>

            <h3>How to Serve and Clear Food</h3>
            
            <ul>
              {data.ServeClearFoodString?.map((item, i) => {
                return <p className="list-items" key={i}>{item}</p>;
              })}
            </ul>

            <div className="strt-btn">
              <a onClick={() => navigate("")}>Next</a>
            </div>
            <div className="strt-btn">
              <a onClick={() => navigate("/Waiter-seven")}>Previous</a>
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
