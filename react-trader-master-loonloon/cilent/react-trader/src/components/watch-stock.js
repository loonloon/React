import React, { Component } from "react";

class WatchStock extends Component {
  state = { symbol: "" };

  watchStockHandler = () => {
    this.props.watchStock(this.state.symbol);
    this.setState({ symbol: "" });
  };

  changeHandler = e => {
    this.setState({ symbol: e.target.value });
  };

  render() {
    return (
      <div className="row">
        <p>
          Available stocks for demo: MCD, BA, BAC, LLY, GM, GE, UAL, WMT, AAL,
          JPM
        </p>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Comma separated list of stocks to watch..."
            value={this.state.symbol}
            onChange={this.changeHandler}
          />
          <span className="input-group-btn">
            <button
              className="btn btn-default"
              type="button"
              onClick={this.watchStockHandler}
            >
              <span
                className="glyphicon glyphicon-eye-open"
                aria-hidden="true"
              />{" "}
              Watch
            </button>
          </span>
        </div>
      </div>
    );
  }
}

export default WatchStock;
