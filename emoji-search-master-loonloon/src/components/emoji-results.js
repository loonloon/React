import React from "react";
import { connect } from "react-redux";
import EmojiResultRow from "./emoji-result-row";

class EmojiResults extends React.Component {
  render() {
    if (this.props.emojiResults) {
      return (
        <div className="component-emoji-results">
          {this.props.emojiResults.displayedEmojis.map(emojiResult => (
            <EmojiResultRow
              key={emojiResult.title}
              symbol={emojiResult.symbol}
              title={emojiResult.title}
            />
          ))}
        </div>
      );
    }

    return null;
  }
}

const mapStateToProps = state => {
  console.log(state);
  return { emojiResults: state.emojiResults };
};

export default connect(mapStateToProps)(EmojiResults);
