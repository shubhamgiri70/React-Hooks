import { useState, useEffect } from "react";
import React from "react";
import "../src/App.css";

function App() {
  let [value, setValue] = useState(0);

  useEffect(() => {
    document.title = `Counter: ${value}`;
    console.log("from useEffect");
  }, [value]);

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
