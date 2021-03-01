import React from "react";

const App = () => {
  return (
    <>
      <div className="container">
        <div className="heading">
          <h1>To-Do</h1>
        </div>
        <div className="form">
          <input type="text" />
          <button>
            <span> Add </span>
          </button>
        </div>
        <div>
          <ul>
            <li>A item</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default App;
