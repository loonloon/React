import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import _ from "lodash";
import { fetchAlbums } from "../../actions";

class Home extends React.Component {
  componentDidMount() {
    this.props.fetchAlbums();
  }

  render() {
    return (
      <>
        <div id="promotion" />
        <h3>
          <em>Fresh</em> off the grill
        </h3>
        <ul id="album-list">
          {_.orderBy(this.props.albums, ["OrderDetails"], ["desc"])
            .slice(0, 5)
            .map(album => (
              <li key={album.AlbumId}>
                <Link to={`/album/${album.AlbumId}`}>
                  <img
                    alt={album.Title}
                    src={`http://localhost:3000${album.AlbumArtUrl}`}
                  />
                  <span>{album.Title}</span>
                </Link>
              </li>
            ))}
        </ul>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    albums: Object.values(state.albums)
  };
};

export default connect(
  mapStateToProps,
  { fetchAlbums }
)(Home);
