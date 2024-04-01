import wavebanner from "../../assets/wavebanner.png";
import { useState, useEffect } from "react";
import group from "../../assets/Illustrations/group.png";
import "../HomePage/HomePage.css";
import "../Buttons/CtaButton.css";
import useAuth from "../../hooks/use-auth";
import useProfile from "../../hooks/use-profile";

function Banner() {
  const { auth, setAuth } = useAuth();
  const { profile, isLoading, error, getProfile } = useProfile();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      <section className="banner">
        {/* <img
          className="wave"
          src={wavebanner}
          alt="background banner image orange wavy lines in the background"
        ></img> */}
        <div className="header">
          <div className="header-text">
            <p className="header-headline">Empowering diversity. Uniting tech visionaries.</p>
            <p className="header-subheadline">We're dedicated to shattering stereotypes and fostering diversity in the tech industry.</p>
            {isAuthenticated &&
            <button className="cta-button-banner">Sign Up</button>}
            <button className="cta-button-banner">Become a Mentor</button>
          </div>
          <div className="header-img">
            <img className="group-img" src={group}></img>
          </div>
        </div>
      </section>
    </>
  );
}
export default Banner;
