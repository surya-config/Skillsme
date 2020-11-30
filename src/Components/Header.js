import React, { useState, useEffect } from "react";
import "./Header.css";
import { BrowserRouter, NavLink } from "react-router-dom";

function Header() {
  let listener = null;
  const [scrollState, setScrollState] = useState(false);

  useEffect(() => {
    listener = document.addEventListener("scroll", (e) => {
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 70) {
        setScrollState(true);
      } else {
        setScrollState(false);
      }
    });
    return () => {
      document.removeEventListener("scroll", listener);
    };
  }, [scrollState]);

  return (
    <BrowserRouter>
      <nav className={`${scrollState ? "headerWithBg" : "header"}`}>
        <a href="/">
          <img
            className="header__logo"
            loading="lazy"
            src="https://www.myskillsme.com/images/logo/logo.png"
            alt="images"
            width="135"
            height="50"
            data-retina="images/logo/logo.png"
          />
        </a>
        <div className="header__links">
          <NavLink
            activeClassName="navbar__link--active"
            className="navbar__link"
            to="/"
          >
            <h4>Home</h4>
          </NavLink>

          <NavLink
            activeClassName="navbar__link--active"
            className="navbar__link"
            to="/practice"
          >
            <h4>Practice Coding</h4>
          </NavLink>

          <NavLink
            activeClassName="navbar__link--active"
            className="navbar__link"
            to="/hiring"
          >
            <h4>Hire Coders</h4>
          </NavLink>

          <NavLink
            activeClassName="navbar__link--active"
            className="navbar__link"
            to="/judge"
          >
            <h4>Be Our Judge</h4>
          </NavLink>

          <NavLink
            activeClassName="navbar__link--active"
            className="navbar__link"
            to="/contact"
          >
            <h4>Contact Us</h4>
          </NavLink>

          <div className="header__buttons">
            <button>Log In</button>
            <button>Sign Up</button>
          </div>
        </div>
      </nav>
    </BrowserRouter>
  );
}

export default Header;
