import React from "react";

const Validation = props => {
  let validationMessage =
    props.inputLength > 5 ? "Text long enough" : "Text too short";

  return <div>{validationMessage}</div>;
};

export default Validation;
