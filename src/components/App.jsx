import React, { useState } from "react";
import ItemList from "./ItemList";
import InputField from "./InputField";

const App = () => {
  const [items, setItem] = useState([]);

  const addItem = (inputText) => {
    setItem((prevValue) => {
      return [...prevValue, inputText];
    });
  };

  const deleteItem = (id) => {
    setItem((prevValue) => {
      return prevValue.filter((item, index) => index !== id);
    });
  };

  return (
    <>
      <div className="container">
        <div className="heading">
          <h1>To-Do</h1>
        </div>
        <InputField addFun={addItem} />

        <div>
          <ul>
            {items.map((item, index) => (
              <ItemList
                key={index}
                text={item}
                id={index}
                onChecked={deleteItem}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default App;
