import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
  const [clicked, setClicked] = useState(false);

  function onButtonClick() {
    setClicked(true);
  }
  return (
    <div id="main">
      <button id="click" onClick={onButtonClick}>
        click
      </button>
      {clicked ? (
        <p id="para">
          Hello, I've learnt to use the full-stack evaluation tool. This makes
          me so happy
        </p>
      ) : null}
    </div>
  );
}

export default App;
