import React, { useRef, useEffect, useState } from "react";
import * as d3 from "d3";
import * as d3Geo from "d3-geo";
import nycJson from "../../geography/values2.json";
// import "./NycMap.css";
// import BoroughInfo from "../boroughInfo/BoroughInfo";

const NycMapLatest = ({ data }) => {
  const geoRef = React.useRef();
  // const [selectedBorough, setSelectedBorough] = useState();
  const width = 500;
  const height = 500;

  // const [x, setX] = useState("450");
  // const [y, setY] = useState("350");

  // const svg = d3.select(geoRef.current); //d3.select("#geo");

  var projection = d3
    .geoMercator()
    .scale(45000)
    .center([-73.935242, 40.73061]) //-73.935242, 40.73061
    .translate([width / 2, height / 2]);

  //   console.log("nycJson", nycJson);

  // console.log("projection ", projection);

  let aa = [1024950, 264277];
  let bb = [994175, 185107];
  let path = d3.geoPath().projection(projection);
  useEffect(() => {
    // Check that svg element has been rendered
    if (geoRef.current) {
      let svg = d3.select(geoRef.current);
      svg
        .attr("width", width)
        .attr("height", height)
        .selectAll("path")
        .data(nycJson.features)
        .enter()
        .append("path")
        .attr("d", path)
        .style("fill", "#207582")
        .style("stroke", "#155A64")
        .on("mouseover", (e, d) => {
          mouseMoveEvent(e, d);
        })
        .on("mouseout", (e, d) => {
          mouseOutEvent(e, d);
        })
        .on("mousedown", (e, d) => {
          mouseDownEvent(e, d);
        });

      svg
        .selectAll("circle")
        .data([aa, bb])
        .enter()
        .append("circle")
        .attr("x", function (d) {
          console.log(projection(d));
          return projection(d)[0];
        })
        .attr("y", function (d) {
          return projection(d)[1];
        })
        // .attr("r", "8px")
        .attr("fill", "red");
    }
  });

  const toolTip = d3
    .select("body")
    .append("div")
    .attr("class", "tool-tip")
    .style("position", "absolute")
    .style("z-index", "10")
    .style("padding", "5px")
    .style("visibility", "hidden")
    .style("background", "transparent")
    .style("color", "white")
    .style("font-size", "20px")
    .text("a simple tooltip");

  const mouseMoveEvent = (e, d) => {
    // console.log("event here ", e.target);
    // console.log("d", d);
    toolTip
      .style("visibility", "visible")
      .style("top", e.pageY + "px")
      .style("left", e.pageX + "px")
      .text(`${d.properties.neighborhood}`);

    d3.select(e.target).style("fill", "white");
  };

  const mouseOutEvent = (e, d) => {
    d3.select(e.target).style("fill", "#207582");
    toolTip.style("visibility", "hidden");
  };

  const mouseDownEvent = (e, d) => {
    console.log("okurrr", d.properties); //
    // setSelectedBorough(d.properties.boro_name);
    // d3.select(e.target);
  };

  return (
    <>
      <svg ref={geoRef} className="nyc-svg" onClick={mouseDownEvent} />
    </>
  );
};

export default NycMapLatest;
