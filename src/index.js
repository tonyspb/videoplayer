import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { Player } from "./player";

const App = ({ children }) => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <Player externalCounter={counter} />
      <hr />
      external counter is {counter} (
      <button onClick={() => setCounter(counter + 1)}>+</button>)
    </>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
