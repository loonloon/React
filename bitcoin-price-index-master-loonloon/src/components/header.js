import React from "react";

const Header = props => {
  return (
    <header style={{ marginBottom: 10 }}>
      <div>
        <span className="header"> {props.title} </span>
      </div>
      <div className="subheader-body">
        <span className="subheader">
          {" "}
          Written by <a className="link">@loonloon</a>.{" "}
        </span>
        <span className="subheader">
          {" "}
          Powered by{" "}
          <a className="link" target="_blank">
            CoinDesk
          </a>
          .{" "}
        </span>
      </div>
    </header>
  );
};

export default Header;
