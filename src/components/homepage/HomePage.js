import React from "react";
import NycMapLatest from "../nycmap/NycMapLatest";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="homepage-container">
      <div className="svg-container">
        <NycMapLatest />
      </div>
      <div>
        <h1 className="homepage-header">Water Quality in NYC</h1>
        <p className="header-blurb">
          Do you know what you’re drinking? <br></br>There are several common
          bacteria found in drinking water. Ecoli and Coliform are bacteria
          tested in drinking water as well as presence of other metals and
          organic materials.{" "}
        </p>
      </div>
    </div>
  );
};

export default HomePage;
