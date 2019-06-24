import React, { Component } from "react";
import "./Today.css";
import axios from "axios";

class Today extends Component {
  state = {
    btcPrice: "",
    ethPrice: "",
    ltcPrice: ""
  };

  getPrices = () => {
    axios
      .get(
        "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC&tsyms=USD"
      )
      .then(response => {
        this.setState({ btcPrice: response.data.BTC.USD });
        this.setState({ ethPrice: response.data.ETH.USD });
        this.setState({ ltcPrice: response.data.LTC.USD });
      })
      .catch(error => {
        console.log(error);
      });
  };

  componentDidMount() {
    this.getPrices();
    setInterval(() => this.getPrices(), 10000);
  }

  render() {
    return (
      <div className="today--section container">
        <h2>Current Price</h2>
        <div className="columns today--section__box">
          <div className="column btc--section">
            <h5>{this.state.btcPrice}</h5>
            <p>1 BTC</p>
          </div>
          <div className="column eth--section">
            <h5>{this.state.ethPrice}</h5>
            <p>1 ETH</p>
          </div>
          <div className="column ltc--section">
            <h5>{this.state.ltcPrice}</h5>
            <p>1 LTC</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Today;
