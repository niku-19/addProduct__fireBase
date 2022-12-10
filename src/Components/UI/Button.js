import React from "react";
import style from "./Button.module.css";

const Button = (props) => {
  return (
    <>
      <button
        className={style.btn}
        type={props.type}
        onClick={props.openAddItemForm}
      >
        {props.children}
      </button>
    </>
  );
};

export default Button;
