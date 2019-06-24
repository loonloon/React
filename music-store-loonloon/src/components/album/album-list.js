import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchAlbumsByGenre } from "../../actions";

class AlbumList extends React.Component {
  componentDidMount() {
    this.props.fetchAlbumsByGenre(this.props.match.params.id);
  }

  render() {
    const { genre, albums } = this.props;
    
    return (
      <div className="genre">
        <h3>
          <em>{genre && genre.Name}</em> Albums
        </h3>
        <ul id="album-list">
          {albums &&
            albums.map(album => {
              return (
                <li key={album.AlbumId}>
                  <Link to={`/album/${album.AlbumId}`}>
                    <img
                      alt={album.Title}
                      src={`http://localhost:3000${album.AlbumArtUrl}`}
                    />
                    <span>{album.Title}</span>
                  </Link>
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    genre: state.genres[ownProps.match.params.id],
    albums: Object.values(state.albums)
  };
};

export default connect(
  mapStateToProps,
  { fetchAlbumsByGenre }
)(AlbumList);
