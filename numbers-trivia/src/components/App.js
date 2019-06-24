import React, { useEffect, useState } from "react";
import axios from "axios";
import Form from "../components/Form";
import "../styles/App.css";

function App() {
  const [welcomeMessage, setWelcomeMessage] = useState(
    "Welcome to Numbers Trivia!"
  );

  const [result, setResult] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setWelcomeMessage("Try Out Our Trivia Generator!");
    }, 3000);
  });

  const Submit = (number, type) => {
    axios
      .get(`http://numbersapi.com/${number}/${type}`)
      .then(response => {
        setResult(response.data);
      })
      .catch(e => console.log("error", e));
  };

  const marginBottom = { marginBottom: "15px" };

  return (
    <div className="App">
      <header className="App-header">
        <h1 id="welcomeMessage">{welcomeMessage}</h1>
        <div id="result" style={marginBottom}>
          {result}
        </div>
        <Form Submit={Submit} />
      </header>
    </div>
  );
}

export default App;
