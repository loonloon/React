import React from "react";
import { connect } from "react-redux";
import { filterPokemons } from "../actions";

class Search extends React.Component {
  render() {
    return (
      <input
        type="text"
        autoFocus
        placeholder="Enter pokemon name..."
        onChange={e => this.props.filterPokemons(e.currentTarget.value)}
      />
    );
  }
}

export default connect(
  null,
  { filterPokemons }
)(Search);
