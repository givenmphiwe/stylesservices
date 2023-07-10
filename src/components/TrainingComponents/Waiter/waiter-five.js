import React from "react";
import data from "../Data/Waiter.json";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Waiter from "../assets/waiter.jpg";
import { useNavigate } from "react-router-dom";

export const WaiterFive = () => {
  const navigate = useNavigate();

  return (
    <div className="..sectionss">
      <div className="containa">
        <div className="content-sect">
          <div className="titl">
            <h1>Waiter Training</h1>
          </div>

          <div className="contety">
            <div className="image-sec">
              <img src={Waiter} />
            </div>

            <h3>When you cannot provide something</h3>
            {data.cannotprovideString?.map((item, i) => {
              return (
                <ul className="list-items" key={i}>
                  {item}
                </ul>
              );
            })}

            <h3>
              Checking guest satisfaction about the meal and dining experience
            </h3>
            <h3>During the meal</h3>
            {data.CheckingGuestSatisfactionString?.map((item, i) => {
              return (
                <ul className="list-items" key={i}>
                  {item}
                </ul>
              );
            })}

            <h3>After the meal</h3>
            {data.aftermealString?.map((item, i) => {
              return (
                <ul className="list-items" key={i}>
                  {item}
                </ul>
              );
            })}

            <h3>Clearing the table</h3>
            {data.clearingtableString?.map((item, i) => {
              return (
                <ul className="list-items" key={i}>
                  {item}
                </ul>
              );
            })}
            <br />
            <h3>Order taking and serving Desserts & After Dinner Drinks</h3>
            <br />
            <h3>Step 1: Taking an order for a dessert</h3>
            {data.TakingorderdessertString?.map((item, i) => {
              return (
                <ul className="list-items" key={i}>
                  {item}
                </ul>
              );
            })}
            <br />
            <h3>Order taking and serving Desserts & After Dinner Drinks</h3>
            <h3>Step 2: Taking an order for coffee, tea and liqueurs</h3>
            {data.TakingorderCoffeString?.map((item, i) => {
              return (
                <ul className="list-items" key={i}>
                  {item}
                </ul>
              );
            })}

            <h3>Step 3: Offering a refill</h3>
            {data.OfferingString?.map((item, i) => {
              return (
                <ul className="list-items" key={i}>
                  {item}
                </ul>
              );
            })}

            <h3>Step 4: Announcing last orders</h3>
            {data.AnnouncelastorderString?.map((item, i) => {
              return (
                <ul className="list-items" key={i}>
                  {item}
                </ul>
              );
            })}

            <div className="strt-btn">
              <a onClick={() => navigate("/Waiter-six")}>Next</a>
            </div>
            <div className="strt-btn">
              <a onClick={() => navigate("/Waiter-four")}>Previous</a>
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
