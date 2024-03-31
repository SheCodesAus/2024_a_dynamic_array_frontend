import { Link, Outlet } from "react-router-dom";
import "../NavBar/NavBar.css";
import React, { useState } from "react";
import { useAuth } from "../../hooks/use-auth";

import close from "../../assets/NavBar/close.png";
import menu from "../../assets/NavBar/menu.png";
import logo from "../../assets/NavBar/logo.png";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { auth, setAuth } = useAuth();

  const handleLogout = () => {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("user_id");
    setAuth({ token: null });
  };

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
            {/* </ul>
        </div> */}

            {/* <div className="signup">
          <ul> */}
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
            <li>
              {auth.token ? (
                <Link to="/" onClick={handleLogout}>
                  Logout
                </Link>
              ) : (
                <Link to="/login">Login</Link>
              )}
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
export default NavBar;
