import React from "react";

const StockRow = props => {
  let lastClass = "";
  let changeClass = "change-positive";
  let iconClass = "glyphicon glyphicon-triangle-top";

  if (props.stock === props.last) {
    lastClass = props.stock.change < 0 ? "last-negative" : "last-positive";
  }

  if (props.stock.change < 0) {
    changeClass = "change-negative";
    iconClass = "glyphicon glyphicon-triangle-bottom";
  }

  return (
    <tr>
      <td>{props.stock.symbol}</td>
      <td>{props.stock.open}</td>
      <td className={lastClass}>{props.stock.last}</td>
      <td className={changeClass}>
        {props.stock.change} <span className={iconClass} aria-hidden="true" />
      </td>
      <td>{props.stock.high}</td>
      <td>{props.stock.low}</td>
      <td>
        <button
          type="button"
          className="btn btn-default btn-sm"
          onClick={() => props.unwatchStock(props.stock.symbol)}
        >
          <span className="glyphicon glyphicon-eye-close" aria-hidden="true" />
        </button>
      </td>
    </tr>
  );
};

export default StockRow;
