import React from "react";
import StockRow from "./stock-row";

const StockTable = props => {
  const renderTableRows = () => {
    return props.stocks.map(stock => (
      <StockRow
        key={stock.symbol}
        stock={stock}
        last={props.last}
        unwatchStock={props.unwatchStock}
      />
    ));
  };

  return (
    <div className="row">
      <table className="table-hover">
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Open</th>
            <th>Last</th>
            <th>Change</th>
            <th>High</th>
            <th>Low</th>
            <th>Unwatch</th>
          </tr>
        </thead>
        <tbody>{props.stocks && renderTableRows()}</tbody>
      </table>
    </div>
  );
};

export default StockTable;
