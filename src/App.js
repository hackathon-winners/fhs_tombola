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

const amazonLinks = [
  "https://amzn.to/34QK5eB",
  "https://amzn.to/3eFQAFy",
  "https://amzn.to/2zbDnDY",
  "https://amzn.to/3eHpu0z",
  "https://amzn.to/2wZYtoi",
  "https://amzn.to/3cMjEJR",
  "https://amzn.to/2RPPP2T",
  "https://amzn.to/2RUYMYJ",
];

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
      <header className="content">
        <img src={logo} class="logo" alt="logo" />
        <h1>Mit einem Klick was Gutes tun!</h1>
        <p>
          Business of Web des Studiengangs MMT-2017 experimentiert mit
          Geschäftsmodellen im Web.
        </p>
        <p>Einfach Gutes tun:</p>
        <ol style={{ textAlign: "left" }}>
          <li>Entdecke ein neues Produkt</li>
          <li>Jeder Kauf unterstützt ein Projektteam.</li>
        </ol>
        <button onClick={goToAmazon}>Amazon entdecken</button>
      </header>
    </div>
  );
}

export default App;
