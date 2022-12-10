import React, { useState } from "react";
import AddItemForm from "./Components/Add items/AddItemForm";
import DisplayItems from "./Components/displayItems/DisplayItems";
function App() {
  const [products, setProducts] = useState([]);
  const onPostDataFetchingHandler = async (products) => {
    const response = await fetch(
      "https://add-project-a1e5c-default-rtdb.firebaseio.com/products.json",
      {
        method: "POST",
        body: JSON.stringify(products),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  };
  const getDataHandler = async (datas) => {
    setProducts(datas);
  };

  return (
    <div className="App">
      <AddItemForm
        onFetchData={onPostDataFetchingHandler}
        onGetData={getDataHandler}
      />
      <DisplayItems onDataMap={products} />
    </div>
  );
}

export default App;
