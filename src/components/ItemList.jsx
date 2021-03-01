import React from "react";

const ItemList = (prop) => {
  return (
    <div onClick={() => prop.onChecked(prop.id)}>
      <li>{prop.text}</li>
    </div>
  );
};

export default ItemList;
