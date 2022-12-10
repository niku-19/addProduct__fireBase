import React from "react";
import style from "./Card.module.css";
const Card = (props) => {
  return (
    <>
      <div className={`container ${style.card}`}>{props.children}</div>
    </>
  );
};

export default Card;
