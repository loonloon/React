import React, { Component } from "react";
import "./History.css";
import axios from "axios";
import moment from "moment";

class History extends Component {
  state = {
    todayPrice: {},
    yesterdayPrice: {},
    twoDaysPrice: {},
    threeDaysPrice: {},
    fourDaysPrice: {}
  };

  getPrices = (symbol, date) => {
    return axios.get(
      `https://min-api.cryptocompare.com/data/pricehistorical?fsym=${symbol}&tsyms=USD&ts=${date}`
    );
  };

  getAllPrices = (day, date) => {
    axios
      .all([
        this.getPrices("BTC", date),
        this.getPrices("ETH", date),
        this.getPrices("LTC", date)
      ])
      .then(
        axios.spread((btc, eth, ltc) => {
          this.setState({
            [day]: {
              date: moment.unix(date).format("MMMM Do YYYY"),
              btc: btc.data.BTC.USD,
              eth: eth.data.ETH.USD,
              ltc: ltc.data.LTC.USD
            }
          });
        })
      )
      .catch(error => {
        console.log(error);
      });
  };

  componentDidMount() {
    const todayDate = moment().unix();
    this.getAllPrices("todayPrice", todayDate);

    const yesterdayDate = moment()
      .subtract(1, "days")
      .unix();
    this.getAllPrices("yesterdayPrice", yesterdayDate);

    const lastTwoDaysDate = moment()
      .subtract(2, "days")
      .unix();
    this.getAllPrices("twoDaysPrice", lastTwoDaysDate);

    const lastThreeDaysDate = moment()
      .subtract(3, "days")
      .unix();
    this.getAllPrices("threeDaysPrice", lastThreeDaysDate);

    const lastFourDaysDate = moment()
      .subtract(4, "days")
      .unix();
    this.getAllPrices("fourDaysPrice", lastFourDaysDate);
  }

  render() {
    return (
      <div className="history--section container">
        <h2>History (Past 5 days)</h2>
        <div className="history--section__box">
          <div className="history--section__box__inner">
            <h4>{this.state.todayPrice.date}</h4>
            <div className="columns">
              <div className="column">
                <p>1 BTC = ${this.state.todayPrice.btc}</p>
              </div>
              <div className="column">
                <p>1 ETH = ${this.state.todayPrice.eth}</p>
              </div>
              <div className="column">
                <p>1 LTC = ${this.state.todayPrice.ltc}</p>
              </div>
            </div>
          </div>
          <div className="history--section__box__inner">
            <h4>{this.state.yesterdayPrice.date}</h4>
            <div className="columns">
              <div className="column">
                <p>1 BTC = ${this.state.yesterdayPrice.btc}</p>
              </div>
              <div className="column">
                <p>1 ETH = ${this.state.yesterdayPrice.eth}</p>
              </div>
              <div className="column">
                <p>1 LTC = ${this.state.yesterdayPrice.ltc}</p>
              </div>
            </div>
          </div>
          <div className="history--section__box__inner">
            <h4>{this.state.twoDaysPrice.date}</h4>
            <div className="columns">
              <div className="column">
                <p>1 BTC = ${this.state.twoDaysPrice.btc}</p>
              </div>
              <div className="column">
                <p>1 ETH = ${this.state.twoDaysPrice.eth}</p>
              </div>
              <div className="column">
                <p>1 LTC = ${this.state.twoDaysPrice.ltc}</p>
              </div>
            </div>
          </div>
          <div className="history--section__box__inner">
            <h4>{this.state.threeDaysPrice.date}</h4>
            <div className="columns">
              <div className="column">
                <p>1 BTC = ${this.state.threeDaysPrice.btc}</p>
              </div>
              <div className="column">
                <p>1 ETH = ${this.state.threeDaysPrice.eth}</p>
              </div>
              <div className="column">
                <p>1 LTC = ${this.state.threeDaysPrice.ltc}</p>
              </div>
            </div>
          </div>
          <div className="history--section__box__inner">
            <h4>{this.state.fourDaysPrice.date}</h4>
            <div className="columns">
              <div className="column">
                <p>1 BTC = ${this.state.fourDaysPrice.btc}</p>
              </div>
              <div className="column">
                <p>1 ETH = ${this.state.fourDaysPrice.eth}</p>
              </div>
              <div className="column">
                <p>1 LTC = ${this.state.fourDaysPrice.ltc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default History;
