import useUser from "../../hooks/use-user.js";
import useProfile from "../../hooks/use-profile.js";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { BsPlus } from "react-icons/bs";
import { MdModeEdit } from "react-icons/md";
import ExperienceCard from "../ExperienceCard/ExperienceCard.jsx";
import "../ProfilePage/ProfilePage.css";
import placeholder from "../../assets/Illustrations/placeholder.png";
import { useAuth } from "../../hooks/use-auth";

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
  const { auth, setAuth } = useAuth();

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
              <p>
                <img src={placeholder}></img>
              </p>
            )}
          </div>
          <span>{profile.number_of_endorsements} Endorsements</span>
        </div>
        <div className="profile-details">
          <h3>{username}</h3>
          <h3>Username: {user.username}</h3>

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
          {auth.token ? (
            <>
              <p> Contact Info</p>

              <p>Contact Preference: {profile.contact_preference}</p>
              <p>
                Email: <h4>{user.email}</h4>
              </p>

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
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default ProfilePageDetails;

// function ProfileCards({profiles}){
//   return (
// <div className="profile-cards-container">
//         {currentProfiles.map((profile, index) => (
//           <ProfileCard key={index} profile={profile} />
//         ))}
//       </div>

//   )

// }

// import ProfilePage from "../../pages/ProfilePage";

// function ProfilePageRender({ profile }) {

//   //   console.log("properties:", profile && profile.id);
//   //   return (
//   //     <div>
//   //       <ProfilePage key={profile.Id} profile={profile} />
//   //     </div>
//   //   );
// }
// export default ProfilePageRender;

// import "../../components/ProfileCards/ProfileCards.css";
// import ProfileCard from "../ProfileCards/ProfileCard";
// import { useState, useEffect } from "react";
// import Paginate from "../ProfileCards/Paginate.jsx";
// import { Link } from "react-router-dom";

// function ProfileCards({ profiles }) {
//   const [shuffledProfiles, setShuffledProfiles] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [profilesPerPage] = useState(3);

//   const indexOfLastProfile = currentPage * profilesPerPage;
//   const indexOfFirstProfile = indexOfLastProfile - profilesPerPage;
//   const currentProfiles = shuffledProfiles.slice(
//     indexOfFirstProfile,
//     indexOfLastProfile
//   );

//   const paginate = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   const previousPage = () => {
//     if (currentPage !== 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   const nextPage = () => {
//     if (currentPage !== Math.ceil(shuffledProfiles.length / profilesPerPage)) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   useEffect(() => {
//     const allProfiles = profiles.flat();
//     const shuffled = shuffleArray(allProfiles);
//     setShuffledProfiles(shuffled);
//   }, []);

//   //the function to shuffle the array elements(Fisher-Yates algorithm)
//   const shuffleArray = (array) => {
//     const shuffledArray = [...array]; //creates a copy of the original array
//     for (let i = shuffledArray.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [shuffledArray[i], shuffledArray[j]] = [
//         shuffledArray[j],
//         shuffledArray[i],
//       ]; //swap the current element with a random element
//     }
//     return shuffledArray;
//   };

//   return (
//     <>
//       <div className="profile-cards-container">
//         {currentProfiles.map((profile, index) => (
//           <ProfileCard key={index} profile={profile} />
//         ))}
//       </div>
//       <div className="paginate-section">
//         <div className="paginate-numbers">
//           <Paginate
//             profilesPerPage={profilesPerPage}
//             totalProfiles={shuffledProfiles.length}
//             paginate={paginate}
//             previousPage={previousPage}
//             nextPage={nextPage}
//           />
//         </div>
//       </div>
//     </>
//   );
// }

// export default ProfileCards;
