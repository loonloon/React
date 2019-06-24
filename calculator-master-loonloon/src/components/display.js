import React from "react";
import "./display.css";

const Display = props => {
  return (
    <div className="component-display">
      <div>{props.value}</div>
    </div>
  );
};

export default Display;
