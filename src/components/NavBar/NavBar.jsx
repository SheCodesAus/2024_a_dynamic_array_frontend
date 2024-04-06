import {Link, Outlet} from "react-router-dom";
import "../NavBar/NavBar.css";
import React, {useState, useEffect} from "react";
import {useAuth} from "../../hooks/use-auth";
import useProfiles from "../../hooks/use-profiles";
import logo from "../../assets/NavBar/logo.png";
import {RxHamburgerMenu} from "react-icons/rx";
import {CgClose} from "react-icons/cg";

function NavBar() {
    const {profiles, setProfiles} = useProfiles();
    const [menuOpen, setMenuOpen] = useState(false);
    const {auth, setAuth} = useAuth();
    const userId = auth.user_id;

    const userProfile = !!profiles && profiles.filter(profile => profile.owner === userId);
    const hasProfile = userProfile.length > 0;

    const isAdmin = auth.is_staff;


    const handleLogout = () => {
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("user_id");
        window.localStorage.removeItem("is_staff");
        setAuth({token: null, user_id: null, is_staff: null});
    };

    return (
        <div className="mobile-container">
            <div className="topNav">
                <Link className="active" onClick={() => setMenuOpen(!menuOpen)} to="/">DiversiTech</Link>
                <div className={`${"nav-Links"} ${menuOpen ? "nav-showItem" : "nav-hideItem"}`}>
                    <Link onClick={() => setMenuOpen(!menuOpen)} to="/">Home</Link>
                    <Link onClick={() => setMenuOpen(!menuOpen)} to="/about">About Us</Link>
                    <Link onClick={() => setMenuOpen(!menuOpen)} to="/contact">Contact Us</Link>
                    {!auth.token ? (
                        <Link onClick={() => setMenuOpen(!menuOpen)} to="/signup">
                            Sign Up
                        </Link>
                    ) : (
                        <Link onClick={() => setMenuOpen(!menuOpen)} to={`/users/${auth.user_id}`}>Account</Link>
                    )}
                    {isAdmin && (
                            <Link onClick={() => setMenuOpen(!menuOpen)} to="/users">
                                User Admin
                            </Link>
                    )}
                    {hasProfile && (
                        <Link onClick={() => setMenuOpen(!menuOpen)} to={`/profile/${userProfile.id}`}>My Profile</Link>
                    )}
                    {auth.token ? (
                        <Link to="/" onClick={() => {handleLogout;setMenuOpen(!menuOpen)}}>
                            Logout
                        </Link>
                    ) : (
                        <Link onClick={() => setMenuOpen(!menuOpen)} to="/login">Login</Link>
                    )}

                </div>
                <a className="icon hamburgerIcon">
                    {menuOpen ? <CgClose size={18} onClick={() => setMenuOpen(!menuOpen)}/> :
                        <RxHamburgerMenu onClick={() => setMenuOpen(!menuOpen)} size={24}/>}
                </a>
            </div>

        </div>
    );
}

export default NavBar;
