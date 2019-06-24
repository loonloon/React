import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header className="component-header">
      <img
        width="32"
        height="32"
        alt=""
        src="//cdn.jsdelivr.net/emojione/assets/png/1f638.png"
      />
      Emoji Search
      <img
        width="32"
        height="32"
        alt=""
        src="//cdn.jsdelivr.net/emojione/assets/png/1f63a.png"
      />
    </header>
  );
};

export default Header;
