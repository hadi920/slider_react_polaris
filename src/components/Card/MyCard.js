import React from "react";
import "./MyCard.css";

const MyCard = ({ img, title, price, description }) => {
  return (
    <div className="mainCard">
      <div className="mainImage">
        <img className="image" src={img} alt={"A product"} />
      </div>
    </div>
  );
};

export default MyCard;
