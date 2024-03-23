import { Link, Outlet } from "react-router-dom";
import "../NavBar/NavBar.css";
import React, { useState } from "react";

import close from "../../assets/NavBar/close.png";
import menu from "../../assets/NavBar/menu.png";
import logo from "../../assets/NavBar/logo.png";
import name from "../../assets/NavBar/name.png";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  {
    /* Auth token permissions and login/logout states not yet implemented!*/
  }

  return (
    <>
      <nav className="navbar">
        <div className="logo-link">
          <Link to="/">
            <img
              className="logo"
              src={logo}
              alt="Image of DiversiTech's logo"
            />
          </Link>
        </div>

        {/* Hamburger menu*/}
        <div className="nav-items">
          <img
            className="burger-menu"
            src={menuOpen ? close : menu}
            alt="hamburger menu and close button for navigation menu"
            onClick={() => setMenuOpen(!menuOpen)}
          />
          <ul
            className={`${"menuItems"} ${menuOpen && "menuOpenStyle"}`}
            onClick={() => setMenuOpen(false)}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="signup">
          <ul>
            <li>
              <Link to="/signup">SignUp</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
export default NavBar;
