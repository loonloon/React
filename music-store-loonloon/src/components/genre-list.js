import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchGenres } from "../actions";

class GenreList extends React.Component {
  componentDidMount() {
    this.props.fetchGenres();
  }

  render() {
    const { genres } = this.props;

    return (
      <ul id="categories">
        {genres.map(genre => (
          <li key={genre.GenreId}>
            <Link to={`/albums/${genre.GenreId}`}>{genre.Name}</Link>
          </li>
        ))}
        <li />
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return {
    genres: Object.values(state.genres)
  };
};

export default connect(
  mapStateToProps,
  { fetchGenres }
)(GenreList);
