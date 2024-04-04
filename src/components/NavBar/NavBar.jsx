import { Link, Outlet } from "react-router-dom";
import "../NavBar/NavBar.css";
import React, { useState, useEffect } from "react";
import { useAuth } from "../../hooks/use-auth";
import useProfiles from "../../hooks/use-profiles";

import close from "../../assets/NavBar/close.png";
import menu from "../../assets/NavBar/menu.png";
import logo from "../../assets/NavBar/logo.png";

function NavBar() {
  const { profiles, setProfiles } = useProfiles();
  const [menuOpen, setMenuOpen] = useState(false);
  const { auth, setAuth } = useAuth();
  const userId = auth.user_id;

  const userProfile = !!profiles && profiles.filter(profile => profile.owner === userId);
  const hasProfile = userProfile.length > 0;

  const isAdmin = auth.is_staff;


  const handleLogout = () => {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("user_id");
    window.localStorage.removeItem("is_staff");
    setAuth({ token: null, user_id: null, is_staff: null });
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

            <li>
              {!auth.token ? (
                <Link to="/signup">
                  Sign Up
                </Link>
              ) : (
                <Link to={`/users/${auth.user_id}`}>Account</Link>
              )}
            </li>
            {isAdmin && (
              <li>
                <Link to="/users">
                User Admin
                </Link>
              </li>
            )}
            {hasProfile && (
              <Link to={`/profile/${userProfile.id}`}>My Profile</Link>
            )}
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
    </>
  );
}
export default NavBar;
