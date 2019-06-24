import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { addToCart } from "../../actions";

class AlbumDetail extends React.Component {
  addToCartHandler = album => {
    this.props.addToCart(album);
  };

  render() {
    const { album } = this.props;
    
    if (!album) {
      return <p>Loading...</p>;
    }

    return (
      <>
        <h2>{album.Title}</h2>
        <p>
          <img
            alt={album.Title}
            src={`http://localhost:3000${album.AlbumArtUrl}`}
          />
        </p>
        <div id="album-details">
          <p>
            <em>Genre:</em> {album.Genre.Name}
          </p>
          <p>
            <em>Artist:</em> {album.Artist.Name}
          </p>
          <p>
            <em>Price:</em> {album.Price}
          </p>
          <p className="button">
            <a href="#" onClick={() => this.addToCartHandler(album)}>
              Add To Cart
            </a>
          </p>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    album: _.find(state.albums, ["AlbumId", Number(ownProps.match.params.id)])
  };
};

export default connect(
  mapStateToProps,
  { addToCart }
)(AlbumDetail);
