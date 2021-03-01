import React from "react";

const ItemList = (props) => {
  return (
    <div onClick={() => props.onChecked(props.id)}>
      <li>{props.text}</li>
    </div>
  );
};

export default ItemList;
