import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const amazonLinks = ["https://amzn.to/34QK5eB"];

function App() {
  const [list, setList] = useState(amazonLinks);

  const goToAmazon = () => {
    let counter = 0;
    const loop = setInterval(() => {
      counter++;
      setList(shuffleArray(list));
      if (counter >= 5) {
        clearInterval(loop);
        window.open(list[0], "_blank");
        window.focus();
      }
    }, 100);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={goToAmazon}>Auf Amazon etwas kaufen</button>
      </header>
    </div>
  );
}

export default App;
