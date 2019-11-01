import React, { useEffect, useRef, useContext } from "react";
import AuthContext from "../../context/auth-context";
import "./Cockpit.css";

const Cockpit = props => {
  const toogleButtonRef = useRef(null);
  const authContext = useContext(AuthContext);

  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    const timer = setTimeout(() => {
      alert("Saved data to cloud!");
    }, 1000);
    // toogleButtonRef.current.focus();
    //run when Cockpit component is hide / remove
    return () => {
      console.log("[Cockpit.js] cleanup work in useEffect");
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    console.log("[Cockpit.js] 2nd useEffect");
    return () => {
      console.log("[Cockpit.js] cleanup work in 2nd useEffect");
    };
  });

  // way 1
  // const classes = ["red", "bold"].join(" ");
  const classes = [];

  if (props.personsLength <= 2) {
    classes.push("red");
  }

  if (props.personsLength <= 1) {
    classes.push("bold");
  }

  return (
    <div className="Cockpit">
      <h1>Hi, I'm a React App</h1>
      <p className={classes.join(" ")}>This is really working!</p>
      <button ref={toogleButtonRef} onClick={props.clicked}>
        Toggle Persons
      </button>
      <button onClick={authContext.login}>Log In</button>}
    </div>
  );
};

export default React.memo(Cockpit);
