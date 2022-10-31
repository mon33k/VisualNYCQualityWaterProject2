import React from "react";
import { Link, Route, Routes } from "react-router-dom";

import AboutPage from "../about/AboutPage";
import NycMap from "../nycmap/NycMap";

const Navbar = () => {
  return (
    <>
      <Link to="/">Homepage</Link>
      <Link to="/about">About</Link>
      <Link to="/allinfo">All Info</Link>

      <Routes>
        <Route path="/" element={<NycMap />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  );
};

export default Navbar;
