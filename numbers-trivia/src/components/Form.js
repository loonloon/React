import React, { useState } from "react";

const Form = props => {
  let [number, setNumber] = useState("random");
  let [type, setType] = useState("trivia");

  const onNumberChanged = e => {
    let value = e.target.value.trim();
    setNumber(!value.length ? "random" : value);
  };

  const onTypeChanged = e => {
    let value = e.target.value.trim();
    setType(!value.length ? "trivia" : value);
  };

  const onSubmit = e => {
    e.preventDefault();
    props.Submit(number, type);
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          type="text"
          name="number"
          placeholder="Enter a number (Optional)"
          value={number}
          onChange={onNumberChanged}
        />
      </div>
      <div>
        <select name="type" value={type} onChange={onTypeChanged}>
          <option value="trivia">Trivia</option>
          <option value="math">Math</option>
          <option value="date">Date</option>
          <option value="year">Year</option>
        </select>
      </div>
      <button type="submit" onSubmit={onSubmit}>
        Generate
      </button>
    </form>
  );
};

export default Form;
