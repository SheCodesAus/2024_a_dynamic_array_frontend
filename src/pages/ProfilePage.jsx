import { BsPlus } from "react-icons/bs";
import { MdModeEdit } from "react-icons/md";
import ExperienceCard from "./../components/ExperienceCard/ExperienceCard";
import "../components/ProfilePage/ProfilePage.css";
import useProfile from "../hooks/use-profile.js";
import useUser from "../hooks/use-user.js";
import { useParams } from "react-router-dom";

import {
  BsShare,
  BsFillCheckCircleFill,
  BsFacebook,
  BsGithub,
  BsLinkedin,
  BsInstagram,
  BsAlarm,
} from "react-icons/bs";

function ProfilePage() {
  const { userid } = useParams();
  const { id } = useParams();
  const { profile, isLoading, error } = useProfile(id);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <section className="profile-page-body">
      <div className="profile-page-container">
        <div className="profile-page-header">
          <div className="profile-image">
            {profile.picture_url ? (
              <div>
                <img src={profile.picture_url} />
              </div>
            ) : (
              <div>
                {/*This is the placecard that can display instead if there is no profile image*/}
                <p> @@</p>
              </div>
            )}
          </div>
          <span>{profile.number_of_endorsements} Endorsements</span>
        </div>
        <div className="profile-details">
          <h3>Full Name</h3>
          <h2>User Name</h2>
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
          <h3>Skill Tags: yet to be developed</h3>
          <div className="skill-tags">
            <div>Development</div>
            <div>Development</div>
            <div>Development</div>
          </div>
          <div>
            <h3>Industry Tags:</h3>
            <div className="industry-tags">
              <div>Security</div>
              <div>Security</div>
              <div>Security</div>
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

export default ProfilePage;
