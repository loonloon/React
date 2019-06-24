import React from "react";

import Header from "./header";
import SearchInput from "./search-input";
import EmojiResults from "./emoji-results";

const App = () => {
  return (
    <div>
      <Header />
      <SearchInput />
      <EmojiResults />
    </div>
  );
};

export default App;
