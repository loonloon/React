import React from "react";
import { connect } from "react-redux";
import { getPokemons } from "../actions";
import Pokemon from "./pokemon";
import Search from "./search";

class Page extends React.Component {
  componentDidMount() {
    this.props.getPokemons();
  }

  renderError = error => {
    if (error) {
      return <div className="page__error">{error}</div>;
    }
  };

  render() {
    const { displayedPokemons, isFetched, error } = this.props.page;
    const pokemons = displayedPokemons.map(pokemon => {
      return (
        <li className="pokemons__item" key={pokemon.id}>
          <Pokemon pokemon={pokemon} />
        </li>
      );
    });

    return (
      <div className="page">
        {this.renderError(error)}
        <div className="page__search">
          <Search />
        </div>
        {isFetched ? (
          <p>Loading...</p>
        ) : (
          <ul className="pokemons">{pokemons}</ul>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { page: state.page };
};

export default connect(
  mapStateToProps,
  { getPokemons }
)(Page);
