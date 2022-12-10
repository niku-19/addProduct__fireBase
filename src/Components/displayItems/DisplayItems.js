import React from "react";
import Card from "../UI/Card";
import style from "./DisplayItems.module.css";

const DisplayItems = (props) => {
  console.log(props.onDataMap);
  return (
    <Card>
      {props.onDataMap.map((listData) => {
        return (
          <>
            <Card>
              <ul className={style.ul}>
                <li>Product Name :- {listData.name}</li>
                <li>Product Price :- {listData.price}</li>
                <li>Product Quantity :- {listData.quantity}</li>
                <li>Product About :- {listData.description}</li>
              </ul>
            </Card>
          </>
        );
      })}
    </Card>
  );
};

export default DisplayItems;
