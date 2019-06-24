import React from "react";
import data from "./data";
import LazyLoad from "react-lazyload";
import Post from "./Post";
import Spinner from "./Spinner";

const App = () => (
  <div className="App">
    <h2>LazyLoad Demo</h2>
    <div className="post-container">
      {data.map(post => (
        <LazyLoad
          key={post.id}
          height={100}
          offset={[-100, 100]}
          placeholder={<Spinner />}
        >
          <Post key={post.id} {...post} />
        </LazyLoad>
      ))}
    </div>
  </div>
);

export default App;
