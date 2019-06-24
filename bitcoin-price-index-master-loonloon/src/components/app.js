import React from "react";
import Header from "./header";
import _ from "lodash";
import { Line, Chart } from "react-chartjs-2";
import moment from "moment";
import { connect } from "react-redux";

import "./app.css";
import currencies from "../data/supported-currencies.json";
import { getData, setCurrency } from "../actions";

class App extends React.Component {
  constructor(props) {
    super(props);
    Chart.defaults.global.defaultFontColor = "#000";
    Chart.defaults.global.defaultFontSize = 16;
  }

  setCurrency = currency => {
    this.props.setCurrency(currency);
  };

  onCurrencySelect = e => {
    this.setCurrency(e.target.value);
  };

  formatChartData = () => {
    const bpi = this.props.historicalData;

    return {
      labels: _.map(_.keys(bpi), date => moment(date).format("ll")),
      datasets: [
        {
          label: "Bitcoin",
          fill: true,
          lineTension: 0.1,
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "rgba(75,192,192,1)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgba(75,192,192,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: _.values(bpi)
        }
      ]
    };
  };

  componentDidMount() {
    this.props.getData(this.props.currency);
  }

  render() {
    if (this.props.historicalData) {
      const currencyOptions = currencies.map((obj, index) => (
        <option key={`${index}-${obj.country}`} value={obj.currency}>
          {obj.currency}
        </option>
      ));
      return (
        <div className="app">
          <Header title="Bitcoin Price Index" />
          <div className="select-container">
            <span style={{ fontSize: 18, fontFamily: "Bungee" }}>
              Select your currency:
            </span>
            <select
              value={this.props.currency}
              onChange={e => this.onCurrencySelect(e)}
            >
              {currencyOptions}
            </select>
            {this.props.currency !== "MYR" && (
              <div>
                <a
                  href="#"
                  className="link"
                  onClick={() => this.setCurrency("MYR")}
                  style={{ color: "black", fontSize: 16, fontFamily: "Bungee" }}
                >
                  {" "}
                  [CLICK HERE TO RESET]{" "}
                </a>
              </div>
            )}
          </div>
          <div style={{ marginTop: 10 }}>
            <Line data={this.formatChartData()} height={250} />
          </div>
        </div>
      );
    }

    return null;
  }
}

const mapStateToProps = state => {
  return {
    historicalData: state.bitcoinData,
    currency: state.currency
  };
};

export default connect(
  mapStateToProps,
  { getData, setCurrency }
)(App);
