import React, { Component } from "react";
import socketIOClient from "socket.io-client";
import WatchStock from "./watch-stock";
import StockTable from "./stock-table";
import "./app.css";

const socket = socketIOClient("localhost:3000");

class App extends Component {
  state = { stocks: [] };

  componentDidMount() {
    this.watchStock([
      "MCD",
      "BA",
      "BAC",
      "LLY",
      "GM",
      "GE",
      "UAL",
      "WMT",
      "AAL",
      "JPM"
    ]);

    socket.on("stock", stock => {
      const index = this.state.stocks.findIndex(s => s.symbol === stock.symbol);

      if (index === -1) {
        this.setState({ stocks: [...this.state.stocks, stock], last: stock });
      } else {
        const stocks = [...this.state.stocks];
        stocks[index] = stock;
        this.setState({ stocks, last: stock });
      }
    });
  }

  watchStock = symbols => {
    socket.emit("join", symbols);
  };

  unwatchStock = symbol => {
    socket.emit("leave", symbol);
    const latestStocks = this.state.stocks.filter(s => s.symbol !== symbol);
    this.setState({ stocks: latestStocks });
  };

  render() {
    return (
      <div>
        <WatchStock watchStock={this.watchStock} />
        <StockTable
          stocks={this.state.stocks}
          last={this.state.last}
          unwatchStock={this.unwatchStock}
        />
        <div className="row">
          <div className="alert alert-warning" role="alert">
            All stock values are fake and changes are simulated. Do not trade
            based on the above data.
          </div>
        </div>
      </div>
    );
  }
}

export default App;
