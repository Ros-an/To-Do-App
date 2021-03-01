import React, { useState } from "react";
import ItemList from "./ItemList";
const App = () => {
  const [value, setValue] = useState("");
  const [items, setItem] = useState([]);

  const handleChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
  };
  const handleClick = () => {
    setItem([...items, value]);
    setValue(" ");
  };

  const deleteItem = (id) => {
    setItem((prevValue) => {
      return prevValue.filter((item, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="container">
        <div className="heading">
          <h1>To-Do</h1>
        </div>
        <div className="form">
          <input type="text" onChange={handleChange} value={value} />
          <button className="add" onClick={handleClick}>
            <span> Add </span>
          </button>
        </div>
        <div>
          <ul>
            {items.map((item, index) => {
              return (
                <ItemList
                  key={index}
                  text={item}
                  id={index}
                  onChecked={deleteItem}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default App;
{
  /* <button className="remove-btn">x</button> */
}
