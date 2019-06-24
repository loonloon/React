import React from "react";
import { connect } from "react-redux";
import { getEmoji, searchEmoji } from "../actions";
import "./search-input.css";

class SearchInput extends React.Component {
  componentDidMount() {
    this.props.getEmoji();
  }

  render() {
    return (
      <div className="component-search-input">
        <div>
          <input onChange={e => this.props.searchEmoji(e.target.value)} />
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { getEmoji, searchEmoji }
)(SearchInput);
