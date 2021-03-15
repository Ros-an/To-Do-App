import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import InputField from "./InputField";

const getListData = () => {
  let list = localStorage.getItem("list");
  // console.log("empty", list);
  if (list) {
    return JSON.parse(localStorage.getItem("list"));
  } else {
    return [];
  }
};

const App = () => {
  const [items, setItem] = useState(getListData());

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

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(items));
  }, [items]);
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
