import React from "react";
import "./Cards.css";

const Card = ({ imageSrc, title, text, onClick }) => {
  return (
    <div className="col-md-2">
      <div className="card" onClick={onClick} style={{ cursor: "pointer" }}>
        <img src={imageSrc} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
