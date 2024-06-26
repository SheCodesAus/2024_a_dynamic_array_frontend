import "../../components/ProfileCards/ProfileCard.css";
import SocialMediaShare from "../ProfileCards/SocialMediaShare.jsx";
import useUser from "../../hooks/use-user.js";
import {
  BsShare,
  BsFillCheckCircleFill,
  BsFacebook,
  BsGithub,
  BsLinkedin,
} from "react-icons/bs";
import profilePlaceHolder from "./../../assets/Profile/profile-placeholder96.png";
import { IoIosCloseCircle } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import getCountries from "../../api/get-countries";
import getStates from "../../api/get-states";

function ProfileCard({ profile }) {
  const { user, isLoading, error } = useUser(profile.owner);
  const [username, setUsername] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [stateName, setStateName] = useState("");
  const [countryName, setCountryName] = useState("");
  const [areaName, setAreaName] = useState("");

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  {
    /* Retrieval of user first name and last name is still not working  */
  }
  useEffect(() => {
    if (profile.owner === user.id) {
      if (!profile.country || profile.country === "") {
        setCountryName("");
      } else
      if (profile.country) {
        getCountries().then((data) => {
          const country = data.countriesData.find(
            (country) => country.iso2 === profile.country
          );
          setCountryName(country.name);
        });
      }
    }
  }, [profile.country, profile.owner, user.id, countryName]);
  
  let countryIso2 = profile.country;
  
  useEffect(() => {
      if (profile.owner === user.id) {
        if (!profile.state || profile.state === "") {
          setStateName("");
         } else if
          (profile.state || profile.country) {
            getStates(countryIso2).then((data) => {
              const state = data.statesData.find((state) => state.iso2 === profile.state);
              setStateName(state.name);
            });
          }
      }
  }, [profile.state, profile.owner, user.id, countryIso2]);

  useEffect(() => {
    if (!isLoading && !error && user) {
      if (profile.owner === user.id) {
        setUsername(`${user.first_name} ${user.last_name}`);
      } else {
        setUsername("Sorry, no name is available!");
      }
    } else {
      setUsername("Loading name...");
    }
  }, [user, isLoading, error, profile.owner]);
  if (!profile) {
    return <div>There are currently no Profiles available</div>;
  }

  const profileLink = `/profile/${profile.id}`;
  return (
    <section className="profile-card-body-container">
      <div className="profile--card-container">
        <div className="profile--card-header">
          <div className="profile-image">
            {profile.picture_url ? (
              <div>
                <img
                  src={profile.picture_url}
                  className="profile--card-placeholder-icon"
                />
              </div>
            ) : (
              <div>
                {/*This is the placecard that can display instead if there is no profile image*/}
                {/*<CgProfile size={64} className="profile--card-placeholder-icon"/>*/}
                <img
                  src={profilePlaceHolder}
                  className="profile--card-placeholder-icon"
                />
              </div>
            )}
          </div>

          <div>
            {/*I am supposed to be retrieveing username from user object here, but havent been successful so far*/}
            <h4>{isLoading ? "Loading name..." : username}</h4>
            {/* <p>{!(areaName) ? ("") : (areaName)}</p> */}
            <p>{!(stateName) ? ("") : (stateName)}</p>
            <p>{!(countryName) ? ("") : (countryName)}</p>

          </div>

          <div className="profile--card-header-share">
            <div className="profile-header-social-menu">
              <SocialMediaShare
                dropdownOpen={dropdownOpen}
                toggleDropdown={toggleDropdown}
                profileId={profile.id}
              />
            </div>
          </div>
        </div>

        <div className="profile--card-body">
          <div className=" profile--card-body-title">Mentorship Status:</div>
          <div className="profile-Card-Body">
            {profile.is_open_to_mentor ? (
              <div>
                <BsFillCheckCircleFill className="tick-icon" />
                <span style={{ marginLeft: "0.5rem" }}>Open to mentoring</span>
              </div>
            ) : (
              <div>
                <IoIosCloseCircle className="close-icon" />
                <span style={{ marginLeft: "0.5rem" }}>
                  Not open to mentoring
                </span>
              </div>
            )}
          </div>

          {profile.is_seeking_mentorship ? (
            <div>
              <BsFillCheckCircleFill className="tick-icon" />
              <span style={{ marginLeft: "0.5rem" }}>Seeking Mentorship</span>
            </div>
          ) : (
            <div>
              <IoIosCloseCircle className="close-icon" />
              <span style={{ marginLeft: "0.5rem" }}>
                Not seeking mentorship
              </span>
            </div>
          )}
        </div>

        <div className="profile--card-footer">
          <div className="hr"></div> {/* Adding a grey line */}
          <div className="profile--card-footer-endorsement">
            <h4>Endorsements: {profile.number_of_endorsements}</h4>
          </div>
          {/* -Note: if user has not provided links to a social media, then the icon just does not display */}
          <div className="profile-card-action-container">
            <div className="profile-card-footer-social-media">
              {profile.facebook_url && (
                <a target="_blank" href={profile.facebook_url}>
                  <BsFacebook
                    style={{ color: "#1877F2", width: "24px", height: "24px" }}
                  />
                </a>
              )}
              {profile.github_url && (
                <a target="_blank" href={profile.github_url}>
                  <BsGithub
                    style={{ color: "#4078c0", width: "24px", height: "24px" }}
                  />
                </a>
              )}
              {profile.linkedin_url && (
                <a target="_blank" href={profile.linkedin_url}>
                  <BsLinkedin
                    style={{ color: "#0077b5", width: "24px", height: "24px" }}
                  />
                </a>
              )}
            </div>
            <Link className="profile-link" to={profileLink}>
              <button className="profile-card-footer-btn">Read More</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfileCard;
