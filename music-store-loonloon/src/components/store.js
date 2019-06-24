import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Store extends React.Component {
  render() {
    const { genres } = this.props;
    
    return (
      <>
        <h3>Browse Genres</h3>
        <p>Select from {genres.length} genres:</p>
        <ul>
          {genres.map(genre => (
            <li key={genre.GenreId}>
              <Link to={`/albums/${genre.GenreId}`}>{genre.Name}</Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    genres: Object.values(state.genres)
  };
};

export default connect(mapStateToProps)(Store);
