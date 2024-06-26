import useUser from "../../hooks/use-user.js";
import useProfile from "../../hooks/use-profile.js";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaHouseMedicalCircleExclamation, FaPlus } from "react-icons/fa6";
import ExperienceCard from "../ExperienceCard/ExperienceCard.jsx";
import CreateExperienceForm from "../Forms/CreateExperienceForm.jsx";
import "../ProfilePage/ProfilePage.css";
import { useAuth } from "../../hooks/use-auth";

import {
  BsFillCheckCircleFill,
  BsFacebook,
  BsGithub,
  BsLinkedin,
  BsInstagram,
  BsGlobe2,
} from "react-icons/bs";
import { IoIosCloseCircle } from "react-icons/io";
import useExperiences from "../../hooks/use-experiences.js";
import getCountries from "../../api/get-countries.js";
import getStates from "../../api/get-states.js";
import getCities from "../../api/get-cities.js";
import { MdOutlineExpandCircleDown } from "react-icons/md";

function ProfilePageDetails() {
  const { id } = useParams();
  const {
    profile,
    isLoading: profileLoading,
    error: profileError,
  } = useProfile(id);

  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [userLoading, setUserLoading] = useState(true);
  const [userError, setUserError] = useState(null);
  const userData = useUser(profile.owner);
  const tags = profile.tags;
  const { auth, setAuth } = useAuth();
  const [countryName, setCountryName] = useState("");
  const [stateName, setStateName] = useState("");
  const [areaName, setAreaName] = useState("");

  const { experiences, isLoading, error } = useExperiences(id);
  const [experiencePopUp, setExperiencePopUp] = useState(false);

  useEffect(() => {
    if (profile.country) {
      getCountries().then((data) => {
        const country = data.countriesData.find(
          (country) => country.iso2 === profile.country
        );
        setCountryName(country.name);
      });
    }
  }, [profile.country]);

  const countryIso2 = profile.country;

  useEffect(() => {
    if (profile.state) {
      getStates(countryIso2).then((data) => {
        const state = data.statesData.find(
          (state) => state.iso2 === profile.state
        );
        setStateName(state.name);
      });
    }
  }, [profile.state]);

  const stateIso2 = profile.state;

  // TO BE IMPLEMENTED AND DEBUGGED WHEN AREA API IS AVAILABLE
  // useEffect(() => {
  //   if (profile.area) {
  //     getCities(countryIso2, stateIso2).then((data) => {
  //       const city = data.citiesData.find(
  //         (city) => city.id === profile.area
  //       );
  //       setAreaName(city.name);
  //     });
  //   }
  // }, [profile.area]);

  useEffect(() => {
    // Check if profile data is available and not loading
    if (userData.user) {
      try {
        setUser(userData.user); // Set user data
        setUsername(`${userData.user.first_name} ${userData.user.last_name}`); // Update username based on user data
        setUserLoading(false);
      } catch (error) {
        setUserError(error);
        setUserLoading(false);
      }
    }
  }, [userData]);

  if (profileLoading || userLoading) {
    return <p>Loading...</p>;
  }

  if (profileError) {
    return <p>Sorry, we can't load the profile information!</p>;
  }
  if (userError) {
    return <p>Sorry we cant load the user information!</p>;
  }

  return (
    <section className="profile-page-body main-container">
      <div className="profile-page-container">
        <div className="profile-page-header">
          <div className="profile-image">
            {profile.picture_url ? (
              <img src={profile.picture_url} alt="Profile" />
            ) : (
              <p>@@</p>
            )}
          </div>
          <span>{profile.number_of_endorsements} Endorsements</span>
        </div>
        <div className="profile-details">
          <h3>{username}</h3>
          <h3>Username: {user.username}</h3>
          <p>{!(areaName) ? ("") : (areaName)}</p>
          <p>{!(stateName) ? ("") : (stateName)}</p>
          <p>{!(countryName) ? ("") : (countryName)}</p>
          <div className="profile-page-render--card-body">
            <div className="profile-Card-Body">
              {profile.is_open_to_mentor ? (
                <div>
                  <BsFillCheckCircleFill className="tick-icon" />
                  <span style={{ marginLeft: "0.5rem" }}>
                    Open to mentoring
                  </span>
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
        </div>
        {/*<hr className="hr" />*/}

        <div className="bio-section">
          <h3>Bio:</h3>
          <p>{profile.bio}</p>
        </div>
      </div>

      <div className="other-info-container">
        <div className="skills-section">
          {profile.tags.length === 0 ? null : (
            <>
              <h3>Tags:</h3>
              <div className="skill-tags">
                <ul>
                  {profile.tags.map((tag, index) => (
                    <li key={index}>{tag}</li>
                  ))}
                </ul>
              </div>
            </>
          )}
          <div>
            {profile.industries.length === 0 ? null : (
              <div className="industry-tags">
                <h3>Industry Categories:</h3>
                <ul>
                  {profile.industries.map((industry, index) => (
                    <li key={index}>{industry}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="profile-page-render-experiences-section">
          <h3>Experiences</h3>

          {auth.token && user.id === profile.owner ? (
            <div className="experience-icons">
              <a onClick={() => setExperiencePopUp(true)}>
                <FaPlus
                  size={24}
                  style={{ color: "#4078c0", width: "24px", height: "24px" }}
                />
              </a>
            </div>
          ) : (
            <br />
          )}
        </div>

        <div className="experience-cards-container">
          {experiences.length === 0 ? (
            <div>
              <p>This profile has no experiences to display at the moment</p>
            </div>
          ) : (
            experiences.map((experienceData, key) => (
              <div className="mb-1">
                <ExperienceCard
                  key={key}
                  experienceData={experienceData}
                  profileOwner={user.id}
                />
              </div>
            ))
          )}
        </div>
      </div>

      <div className="contact-info">
        {auth.token ? (
          <>
            <h4> Contact Info</h4>

            <p className="mt-1">
              <strong>Contact Preference: </strong>
              {profile.contact_preference}
            </p>
            <div className="my-1">
              <strong>Email: </strong>
              <br />
              <p>{user.email}</p>
            </div>

            {profile.facebook_url && (
              <a
                target="_blank"
                href={profile.facebook_url}
                className="experience-contact-info"
              >
                <BsFacebook
                  style={{ color: "#1877F2", width: "24px", height: "24px" }}
                />{" "}
                Facebook
              </a>
            )}
            {profile.github_url && (
              <a
                target="_blank"
                href={profile.github_url}
                className="experience-contact-info"
              >
                <BsGithub
                  style={{ color: "#171515", width: "24px", height: "24px" }}
                />{" "}
                GitHub
              </a>
            )}
            {profile.linkedin_url && (
              <a
                target="_blank"
                href={profile.linkedin_url}
                className="experience-contact-info"
              >
                <BsLinkedin
                  style={{ color: "#0077B5", width: "24px", height: "24px" }}
                />{" "}
                LinkedIn
              </a>
            )}
            {profile.instagram_url && (
              <a
                target="_blank"
                href={profile.instagram_url}
                className="experience-contact-info"
              >
                <BsInstagram
                  style={{ color: "#f9ce34", width: "24px", height: "24px" }}
                />{" "}
                Instagram
              </a>
            )}
            {profile.portfolio_url && (
              <a
                target="_blank"
                href={profile.portfolio_url}
                className="experience-contact-info"
              >
                <BsGlobe2
                  style={{ color: "#0077b5", width: "24px", height: "24px" }}
                />{" "}
                Website
              </a>
            )}
          </>
        ) : (
          <div className="sign-up-message">
            <p>
              Unlock the full potential of our platform by registering today!
              Once you're a member, you'll gain access to full profiles and the
              ability to contact individuals. Don't miss out on valuable
              connections.{" "}
            </p>
            <p>
              <Link to="/signup">Sign Up</Link> today!
            </p>
            <p> Already a member? </p>
            <p>
              {" "}
              <Link to="/login">Log in</Link> to see Contact details
            </p>
          </div>
        )}
      </div>
      <div>
        {experiencePopUp ? (
          <CreateExperienceForm
            id={id}
            trigger={experiencePopUp}
            setTrigger={setExperiencePopUp}
          />
        ) : null}
      </div>
    </section>
  );
}

export default ProfilePageDetails;
