import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Barman from "../TrainingComponents/assets/barman.jpg";
import { useNavigate } from "react-router-dom";
import data from "../TrainingComponents/Data/Barman.json";

export const BarmanThree = () => {
  const navigate = useNavigate();

  return (
    <div className="sectionsfive">
      <div className="containa">
        <div className="content-sect">
          <div className="titl">
            <h1>Skills for a bartender to have:</h1>
          </div>

          <div className="contety">
            <h3>Memory</h3>
            {data.Memory?.map((item, i) => {
              return (
                <p className="list-items" key={i}>
                  {item}
                </p>
              );
            })}

            <h3>Mixology and preparation</h3>
            {data.Mixology?.map((item, i) => {
              return (
                <p className="list-items" key={i}>
                  {item}
                </p>
              );
            })}

            <h3>Communication</h3>
            {data.Communication?.map((item, i) => {
              return (
                <p className="list-items" key={i}>
                  {item}
                </p>
              );
            })}

            <h3>Flexibility</h3>
            {data.Flexibility?.map((item, i) => {
              return (
                <p className="list-items" key={i}>
                  {item}
                </p>
              );
            })}

            <h3>Organization</h3>
            {data.Organization?.map((item, i) => {
              return (
                <p className="list-items" key={i}>
                  {item}
                </p>
              );
            })}

            <h3>Friendliness</h3>
            {data.Friendliness?.map((item, i) => {
              return (
                <p className="list-items" key={i}>
                  {item}
                </p>
              );
            })}

            <h3>Consistency</h3>
            {data.Consistency?.map((item, i) => {
              return (
                <p className="list-items" key={i}>
                  {item}
                </p>
              );
            })}

            <h3>People Skills</h3>
            {data.PeopleSkills?.map((item, i) => {
              return (
                <p className="list-items" key={i}>
                  {item}
                </p>
              );
            })}

            <h3>Cash Management</h3>
            {data.CashManagement?.map((item, i) => {
              return (
                <p className="list-items" key={i}>
                  {item}
                </p>
              );
            })}

            <h3>Stamina</h3>
            {data.Stamina?.map((item, i) => {
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
