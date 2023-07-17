import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Health from "../assets/health.jpg";
import { useNavigate } from "react-router-dom";
import data from "../Data/HealthCare.json";

export const HealthThree = () => {
  const navigate = useNavigate();

  return (
    <div className="sectionseight">
      <div className="containa">
        <div className="content-sect">
          <div className="titl">
            <h1>Health Training</h1>
          </div>

          <div className="contety">
            <h3>Common Illness</h3>
            <p>
              It spread through the air we breath from infected persons. It is
              more serious than just a normal cold.
            </p>
            <h3>Signs and symptoms:</h3>
            {data.Influenza?.map((item, i) => {
              return (
                <p className="list-items" key={i}>
                  {item}
                </p>
              );
            })}

            <h3>Treatment</h3>
            {data.Treatment?.map((item, i) => {
              return (
                <p className="list-items" key={i}>
                  {item}
                </p>
              );
            })}

            <h3>prevention</h3>
            {data.Prevention?.map((item, i) => {
              return (
                <p className="list-items" key={i}>
                  {item}
                </p>
              );
            })}

            <h3>Asthma</h3>
            {data.Asthma?.map((item, i) => {
              return (
                <p className="list-items" key={i}>
                  {item}
                </p>
              );
            })}

            <h3>Urinary Tract Infection</h3>
            {data.Tract?.map((item, i) => {
              return (
                <p className="list-items" key={i}>
                  {item}
                </p>
              );
            })}

            <h3>Sign and symptoms</h3>
            {data.SignAndSymptoms?.map((item, i) => {
              return (
                <p className="list-items" key={i}>
                  {item}
                </p>
              );
            })}

            <h3>Prevention</h3>
            {data.UrineHealth?.map((item, i) => {
              return (
                <p className="list-items" key={i}>
                  {item}
                </p>
              );
            })}

            <h3>Heart Attack</h3>
            {data.HeartAttack?.map((item, i) => {
              return (
                <p className="list-items" key={i}>
                  {item}
                </p>
              );
            })}

            <h3>EPILEPSY</h3>
            {data.Epilepsy?.map((item, i) => {
              return (
                <p className="list-items" key={i}>
                  {item}
                </p>
              );
            })}

            <h3>HEPATITIS</h3>
            {data.hepatits?.map((item, i) => {
              return (
                <p className="list-items" key={i}>
                  {item}
                </p>
              );
            })}

            <h3>CATARACT</h3>
            {data.Cataract?.map((item, i) => {
              return (
                <p className="list-items" key={i}>
                  {item}
                </p>
              );
            })}

            <h3>ALZHEIMER'S DISEASE</h3>
            {data.Alzheimer?.map((item, i) => {
              return (
                <p className="list-items" key={i}>
                  {item}
                </p>
              );
            })}

            <div className="strt-btn">
              <a onClick={() => navigate("/Health-four")}>Next</a>
            </div>

            <div className="strt-btn">
              <a onClick={() => navigate("/Health-two")}>Back</a>
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
