import React, { Component } from "react";
import * as d3 from "d3";

class BarChart extends Component {
  componentDidMount() {
    const data = [2, 6, 2, 6, 8];
    this.drawBarChart(data);
  }

  drawBarChart = data => {
    const canvasHeight = 400;
    const canvasWidth = 600;
    const scale = 20;

    const svgCanvas = d3
      .select(this.refs.canvas)
      .append("svg")
      .attr("width", canvasWidth)
      .attr("height", canvasHeight)
      .style("border", "1px solid black");

    svgCanvas
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("width", 40)
      .attr("height", dataPoint => dataPoint * scale)
      .attr("fill", "orange")
      .attr("x", (dataPoint, iteration) => iteration * 45)
      .attr("y", dataPoint => canvasHeight - dataPoint * scale);

    svgCanvas
      .selectAll("text")
      .data(data)
      .enter()
      .append("text")
      .attr("x", (dataPoint, i) => i * 45 + 15)
      .attr("y", (dataPoint, i) => canvasHeight - dataPoint * scale - 10)
      .text(dataPoint => dataPoint);
  };

  render() {
    return <div ref="canvas" />;
  }
}

export default BarChart;
