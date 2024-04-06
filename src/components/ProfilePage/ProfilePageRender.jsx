import useUser from "../../hooks/use-user.js";
import useProfile from "../../hooks/use-profile.js";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { BsPlus } from "react-icons/bs";
import { MdModeEdit } from "react-icons/md";
import ExperienceCard from "../ExperienceCard/ExperienceCard.jsx";
import CreateExperienceForm from "../Forms/CreateExperienceForm.jsx";
import "../ProfilePage/ProfilePage.css";
import {useAuth} from "../../hooks/use-auth";

import {
    BsFillCheckCircleFill,
    BsFacebook,
    BsGithub,
    BsLinkedin,
    BsInstagram,
    BsAlarm,
} from "react-icons/bs";
import {IoIosCloseCircle} from "react-icons/io";
import useExperiences from "../../hooks/use-experiences.js";
import EditExperienceForm from "../Forms/EditExperienceForm.jsx";

function ProfilePageDetails() {
    const {id} = useParams();
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
    const {auth, setAuth} = useAuth();


  const {experiences , isLoading, error} = useExperiences(id);
  const [experiencePopUp, setExperiencePopUp] = useState(false)
  const [editExperiencePopUp, setEditExperiencePopUp] = useState(false)

  console.log("profile.owner:", profile.owner);
  console.log("auth", auth);
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
    console.log("user_id:", user.id);
 
    return (
        <section className="profile-page-body main-container">
            <div className="profile-page-container">
                <div className="profile-page-header">
                    <div className="profile-image">
                        {profile.picture_url ? (
                            <img src={profile.picture_url} alt="Profile"/>
                        ) : (
                            <p>@@</p>
                        )}
                    </div>
                    <span>{profile.number_of_endorsements} Endorsements</span>
                </div>
                <div className="profile-details">
                    <h3>{username}</h3>
                    <h3>Username: {user.username}</h3>

                    <p>{profile.location}</p>
                    <div className="profile-page-render--card-body">
                        <div className="profile-Card-Body">
                            {profile.is_open_to_mentor ? (
                                <div>
                                    <BsFillCheckCircleFill className="tick-icon"/>
                                    <span style={{marginLeft: "0.5rem"}}>Open to mentoring</span>
                                </div>
                            ) : (
                                <div>
                                    <IoIosCloseCircle className="close-icon"/>
                                    <span style={{marginLeft: "0.5rem"}}>
                  Not open to mentoring
                </span>
                                </div>
                            )}
                        </div>
                        {profile.is_seeking_mentorship ? (
                            <div>
                                <BsFillCheckCircleFill className="tick-icon"/>
                                <span style={{marginLeft: "0.5rem"}}>Seeking Mentorship</span>
                            </div>
                        ) : (
                            <div>
                                <IoIosCloseCircle className="close-icon"/>
                                <span style={{marginLeft: "0.5rem"}}>
                Not seeking mentorship
              </span>
                            </div>
                        )}
                    </div>
                </div>
                <hr className="hr"/>

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
          
          {auth.token && auth.user_id==profile.owner ? ( 
          <div className="experience-icons">
           
            <a onClick={() => setExperiencePopUp(true)} >
              <BsPlus 
                style={{ color: "#4078c0", width: "24px", height: "24px" }}
              />
            </a>
          </div> ) : (
            <br/>
          )}


        </div>

        <div className="experience-card-container">
        {experiences.map((experienceData, key) => {
                return <ExperienceCard key={key} experienceData={experienceData} profileOwner={user.id} />;
            })}
        </div>

                </div>
                <div className="contact-info">
                    {auth.token ? (
                        <>
                            <p> Contact Info</p>

                            <p>Contact Preference: {profile.contact_preference}</p>
                            <div>
                                Email: <p>{user.email}</p>
                            </div>

                            {profile.facebook_url && (
                                <a target="_blank" href={profile.facebook_url}>
                                    <BsFacebook
                                        style={{color: "#1877F2", width: "24px", height: "24px"}}
                                    />{" "}
                                    Facebook
                                </a>
                            )}
                            {profile.github_url && (
                                <a target="_blank" href={profile.github_url}>
                                    <BsGithub
                                        style={{color: "#4078c0", width: "24px", height: "24px"}}
                                    />{" "}
                                    GitHub
                                </a>
                            )}
                            {profile.linkedin_url && (
                                <a target="_blank" href={profile.linkedin_url}>
                                    <BsLinkedin
                                        style={{color: "#0077b5", width: "24px", height: "24px"}}
                                    />{" "}
                                    LinkedIn
                                </a>
                            )}
                            {profile.instagram_url && (
                                <a target="_blank" href={profile.linkedin_url}>
                                    <BsInstagram
                                        style={{color: "#0077b5", width: "24px", height: "24px"}}
                                    />{" "}
                                    Instagram
                                </a>
                            )}
                            {profile.portfolio_url && (
                                <a target="_blank" href={profile.linkedin_url}>
                                    <BsAlarm
                                        style={{color: "#0077b5", width: "24px", height: "24px"}}
                                    />{" "}
                                    Website
                                </a>
                            )}
                        </>
                    ) : (
                        <div className="sign-up-message">
                            <p>
                                Unlock the full potential of our platform by registering today!
                                Once you're a member, you'll gain access to full profiles and
                                the ability to contact individuals. Don't miss out on valuable
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
           
            {experiencePopUp ? <CreateExperienceForm id={id} trigger={experiencePopUp} setTrigger={setExperiencePopUp}/> : null}
        </div>
        <div>
           
            {experiencePopUp ? <EditExperienceForm trigger={editExperiencePopUp} setTrigger={setEditExperiencePopUp}/> : null}
        </div>
        </section>
    );
}

export default ProfilePageDetails;
