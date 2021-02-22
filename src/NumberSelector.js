import React from "react";
import { useState } from "react";
import "./style.css";

export default function NumberSelector(props) {
  const [number, setNumber] = useState(props.initialNumber);

  return (
    <div className="number-selector">
      <h1>{props.title}</h1>
      <div
        className="number-selector__minus"
        onClick={() => setNumber(number - 1)}
      >
        -
      </div>
      <input type="number" value={number} />
      <div
        className="number-selector__plus"
        onClick={() => setNumber(number + 1)}
      >
        +
      </div>
    </div>
  );
}
