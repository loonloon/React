import React from "react";
import "./image-list.css";
import ImageCard from "./image-card";

const ImageList = props => {
    const images = props.images.map((image) => <ImageCard key={image.id} image={image} />);
    return <div className="image-list">{images}</div>;
};

export default ImageList;