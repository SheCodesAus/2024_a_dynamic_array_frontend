import useUser from "../../hooks/use-user.js";
import useProfile from "../../hooks/use-profile.js";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { BsPlus } from "react-icons/bs";
import { MdModeEdit } from "react-icons/md";
import ExperienceCard from "../ExperienceCard/ExperienceCard.jsx";
import "../ProfilePage/ProfilePage.css";

import {
  BsFillCheckCircleFill,
  BsFacebook,
  BsGithub,
  BsLinkedin,
  BsInstagram,
  BsAlarm,
} from "react-icons/bs";

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

  console.log("profile.owner:", profile.owner);
  useEffect(() => {
    // Check if profile data is available and not loading
    if (userData.user) {
      try {
        setUser(userData.user); // Set user data
        console.log("userData:", userData);
        setUsername(`${userData.user.first_name} ${userData.user.last_name}`); // Update username based on user data
        setUserLoading(false);
        console.log("username:", username);
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
  console.log("tags:", profile.tags.length);
  console.log("profile data:", profile);
  return (
    <section className="profile-page-body">
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
          <h3>{user.email}</h3>
          <p>{profile.location}</p>
          <div className="profile--card-body">
            <div className="profile-Card-Body">
              {profile.is_open_to_mentor ? (
                <div>
                  <BsFillCheckCircleFill />
                  <span style={{ marginLeft: "0.5rem" }}>
                    Open to mentoring
                  </span>
                </div>
              ) : (
                <div>
                  <span>X</span>
                  <span style={{ marginLeft: "0.5rem" }}>
                    Not open to mentoring
                  </span>
                </div>
              )}
            </div>

            {profile.is_seeking_mentorship ? (
              <div>
                <BsFillCheckCircleFill />
                <span style={{ marginLeft: "0.5rem" }}>Seeking Mentorship</span>
              </div>
            ) : (
              <div>
                <span>X</span>
                <span style={{ marginLeft: "0.5rem" }}>
                  Not seeking mentorship
                </span>
              </div>
            )}
          </div>
        </div>
        <hr className="hr" />

        <div className="bio-section">
          <h3>Bio:</h3>
          <p>{profile.bio}</p>
        </div>
        <hr className="hr" />
        <div className="skills-section">
          <h3>Tags:</h3>
          <div className="skill-tags">
            <ul>
              {profile.tags.map((tag, index) => (
                <li key={index}>{tag}</li>
              ))}
            </ul>
          </div>
          <div>
            <div className="industry-tags">
              <h3>Industry Tags:</h3>
              <ul>
                {profile.industries.map((industry, index) => (
                  <li key={index}>{industry}</li>
                ))}
              </ul>
            </div>
          </div>
          <a target="_blank" href="#">
            <MdModeEdit
              style={{ color: "#4078c0", width: "24px", height: "24px" }}
            />
          </a>
        </div>
        <hr className="hr" />
        <div className="experiences-section">
          <h3>Experiences</h3>
          <div className="experience-icons">
            <a target="_blank" href="#">
              <MdModeEdit
                style={{ color: "#4078c0", width: "24px", height: "24px" }}
              />
            </a>
            <a target="_blank" href="#">
              <BsPlus
                style={{ color: "#4078c0", width: "24px", height: "24px" }}
              />
            </a>
          </div>
        </div>
        <div className="experience-card-container">
          <ExperienceCard />
          <ExperienceCard />
          <ExperienceCard />
        </div>
        <div className="contact-info">
          Contact Info
          <div>
            <p>Contact Preference: {profile.contact_preference}</p>
          </div>
          {profile.facebook_url && (
            <a target="_blank" href={profile.facebook_url}>
              <BsFacebook
                style={{ color: "#1877F2", width: "24px", height: "24px" }}
              />{" "}
              Facebook
            </a>
          )}
          {profile.github_url && (
            <a target="_blank" href={profile.github_url}>
              <BsGithub
                style={{ color: "#4078c0", width: "24px", height: "24px" }}
              />{" "}
              GitHub
            </a>
          )}
          {profile.linkedin_url && (
            <a target="_blank" href={profile.linkedin_url}>
              <BsLinkedin
                style={{ color: "#0077b5", width: "24px", height: "24px" }}
              />{" "}
              LinkedIn
            </a>
          )}
          {profile.instagram_url && (
            <a target="_blank" href={profile.linkedin_url}>
              <BsInstagram
                style={{ color: "#0077b5", width: "24px", height: "24px" }}
              />{" "}
              Instagram
            </a>
          )}
          {profile.portfolio_url && (
            <a target="_blank" href={profile.linkedin_url}>
              <BsAlarm
                style={{ color: "#0077b5", width: "24px", height: "24px" }}
              />{" "}
              Website
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

export default ProfilePageDetails;
