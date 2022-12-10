import React, { useState } from "react";
import Card from "../UI/Card";
import style from "./AddItems.module.css";
import Button from "../UI/Button";

const AddItemForm = (props) => {
  const [showAddItemForm, setShowAddItemForm] = useState(false);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [description, setDescription] = useState("");
  const onAddItemFormHandler = async () => {
    const response = await fetch(
      "https://add-project-a1e5c-default-rtdb.firebaseio.com/products.json"
    );
    const data = await response.json();
    const loadedData = [];
    for (const key in data) {
      loadedData.push({
        id: key,
        name: data[key].name,
        price: data[key].price,
        quantity: data[key].quantity,
        description: data[key].description,
      });
    }
    props.onGetData(loadedData);
  };
  const onToogleBtn = () => {
    setShowAddItemForm((prevState) => !prevState);
  };
  const onAddItemNameHandler = (event) => {
    event.preventDefault();
    setName(event.target.value);
  };
  const onAddItemPriceHandler = (event) => {
    event.preventDefault();
    setPrice(event.target.value);
  };
  const onAddItemQuantityHandler = (event) => {
    event.preventDefault();
    setQuantity(event.target.value);
  };
  const onAddItemDescHandler = (event) => {
    event.preventDefault();
    setDescription(event.target.value);
  };
  const onSubmitAddItemsHandler = (event) => {
    event.preventDefault();
    const products = {
      name: name,
      price: price,
      quantity: quantity,
      description: description,
    };
    props.onFetchData(products);
  };

  return (
    <Card>
      <form action="addItems" onSubmit={onSubmitAddItemsHandler}>
        {showAddItemForm && (
          <>
            <div className={style.addItem__name}>
              <label htmlFor="AddItems">Add Product</label>
              <input
                type="text"
                placeholder="Add Your Item"
                required
                maxLength={20}
                onChange={onAddItemNameHandler}
              />
            </div>
            <div className={style.item__price}>
              <label htmlFor="price">Price</label>
              <input
                type="number"
                placeholder="Price"
                required
                onChange={onAddItemPriceHandler}
              />
            </div>
            <div className={style.item__quantity}>
              <label htmlFor="quantity">Quantity</label>
              <input
                type="number"
                placeholder="Quantity"
                required
                onChange={onAddItemQuantityHandler}
              />
            </div>
            <div className={style.item__description}>
              <label htmlFor="description">Description</label>
              <textarea
                name="description"
                id="description"
                cols="30"
                placeholder="Description"
                required
                onChange={onAddItemDescHandler}
              ></textarea>
            </div>

            <div className={style.btn__container}>
              <Button type={"submit"}>Add Product</Button>
              <Button openAddItemForm={onAddItemFormHandler}>
                Fetch product
              </Button>
            </div>
          </>
        )}
      </form>
      <div className={style.btn__container}>
        <Button openAddItemForm={onToogleBtn} type={"submit"}>
          {!showAddItemForm ? "Add New Product" : "Cancel"}
        </Button>
      </div>
    </Card>
  );
};
export default AddItemForm;
