import { useState } from "react";
import React from "react";
import "../src/App.css";

function App() {
  let [value, setValue] = useState(0);

  return (
    <div className="app">
      <h1>{value}</h1>
      <button
        onClick={() => {
          setValue(value + 1);
        }}
      >
        Increment
      </button>
    </div>
  );
}
export default App;
