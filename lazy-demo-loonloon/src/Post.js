import React from "react";
import LazyLoad from "react-lazyload";

const Post = ({ id, title, body }) => (
  <div className="post">
    <LazyLoad
      once={true}
      placeholder={<img src={`https://picsum.photos/id/${id}/5/5`} alt="..." />}
    >
      <div className="post-img">
        <img src={`https://picsum.photos/id/${id}/1000/1000`} alt="..." />
      </div>
    </LazyLoad>
    <div className="post-body">
      <h4>{title}</h4>
      <p>{body}</p>
    </div>
  </div>
);

export default Post;
