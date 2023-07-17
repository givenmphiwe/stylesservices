import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Health from "../assets/health.jpg";
import { useNavigate } from "react-router-dom";
import data from "../Data/HealthCare.json";

export const HealthOne = () => {
  const navigate = useNavigate();

  return (
    <div className="sectionsONE">
      <div className="containa">
        <div className="content-sect">
          <div className="titl">
            <h1>Health Training</h1>
          </div>

          <div className="contety">
            <h3>Patient with loss of sight</h3>
            {data.sight?.map((item, i) => {
              return (
                <p className="list-items" key={i}>
                  {item}
                </p>
              );
            })}

            <h3>Patient with loss of speech</h3>
            {data.Speech?.map((item, i) => {
              return (
                <p className="list-items" key={i}>
                  {item}
                </p>
              );
            })}

            <h3>Confused patient</h3>
            {data.Disorientated?.map((item, i) => {
              return (
                <p className="list-items" key={i}>
                  {item}
                </p>
              );
            })}

            <h3>Patient with weakened hearing</h3>
            {data.Hearing?.map((item, i) => {
              return (
                <p className="list-items" key={i}>
                  {item}
                </p>
              );
            })}
            <div className="image-sec">
              <img src={Health} />
            </div>
            <h3>Patient who had stroke</h3>
            {data.stroke?.map((item, i) => {
              return (
                <p className="list-items" key={i}>
                  {item}
                </p>
              );
            })}
            <br />

            <h3>Problems that may occur</h3>
            {data.problems?.map((item, i) => {
              return (
                <p className="list-items" key={i}>
                  {item}
                </p>
              );
            })}
            <br/>
            <h3>How to speak to a patient who has had stroke</h3>
            {data.HadStroke?.map((item, i) => {
              return (
                <p className="list-items" key={i}>
                  {item}
                </p>
              );
            })}
            <br/>
            <h3>Activities for a stroke</h3>
            {data.StrokeActivities?.map((item, i) => {
              return (
                <p className="list-items" key={i}>
                  {item}
                </p>
              );
            })}

            <h3>When and what to report to the RN</h3>
            {data.reportRn?.map((item, i) => {
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
              <a onClick={() => navigate("/Healthintro")}>Back</a>
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
          <img src={Health} />
        </div>
      </div>
    </div>
  );
};
