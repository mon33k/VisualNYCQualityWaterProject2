import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";

import AboutPage from "../about/AboutPage";
import HomePage from "../homepage/HomePage";
import NycMapLatest from "../nycmap/NycMapLatest";
import "./Navbar.css";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

  return (
    <>
      <div className="py-8">
        <nav>
          <section className="mobile-menu flex lg:hidden">
            <div
              className="hamburger-icon space-y-2"
              onClick={() => setIsNavOpen((prev) => !prev)}
            >
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            </div>

            <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
              <div
                className="absolute top-0 right-0 px-8 py-8"
                onClick={() => setIsNavOpen(false)}
              >
                <svg
                  className="h-8 w-8 text-gray-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
              <ul className="flex flex-col items-center justify-between min-h-[250px]">
                <li className="border-b border-gray-400 my-8 uppercase">
                  <a href="/about">About</a>
                </li>
                <li className="border-b border-gray-400 my-8 uppercase">
                  <a href="/portfolio">Portfolio</a>
                </li>
                <li className="border-b border-gray-400 my-8 uppercase">
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </div>
          </section>

          <ul className="desktop-menu hidden space-x-8 lg:flex">
            <li>
              <Link className="navbar-link" to="/">
                Homepage
              </Link>
            </li>
            <li>
              <Link className="navbar-link" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="navbar-link" to="/searchinfo">
                Search Borough
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  );
};

export default Navbar;
