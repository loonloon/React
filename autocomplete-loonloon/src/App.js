import React from "react";
import "./styles.css";
import AutoComplete from "./AutoComplete";

const App = () => {
  return (
    <div className="App">
      <AutoComplete
        options={[
          "Papaya",
          "Persimmon",
          "Paw Paw",
          "Prickly Pear",
          "Peach",
          "Pomegranate",
          "Pineapple"
        ]}
      />
    </div>
  );
};

export default App;
