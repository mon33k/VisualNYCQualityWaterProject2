import React from "react";
import { Link, Route, Routes } from "react-router-dom";

import AboutPage from "../about/AboutPage";
import NycMap from "../nycmap/NycMap";
import NycMap2 from "../nycmap/NycMap2";

const Navbar = () => {
  return (
    <>
      <Link to="/">Homepage</Link>
      <Link to="/about">About</Link>
      <Link to="/allinfo">All Info</Link>
      <Link to="/secondmap">Map 2</Link>

      <Routes>
        <Route path="/" element={<NycMap />} />
        <Route path="/secondmap" element={<NycMap2 />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  );
};

export default Navbar;
