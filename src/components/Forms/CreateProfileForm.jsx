import React, { useState } from "react";
import postProfile from "../../api/post-profile";

import { useNavigate } from "react-router-dom"; // import the useNavigate hook
import { useAuth } from "../../hooks/use-auth";
import ToggleSwitch from "./ToggleSwitch/ToggleSwitch.jsx";
import "../../components/Forms/CreateProfile.css";
import LocationDropdowns from "./SelectOptions/TestPage.jsx";


function CreateProfileForm() {
  const navigate = useNavigate(); // use the navigate hook
  const { auth, setAuth } = useAuth();

  const [profile, setProfile] = useState({
    bio: "",
    picture_url: "",
    is_hidden: "false",
    number_of_endorsements: 0,
    facebook_url: "",
    instagram_url: "",
    github_url: "",
    linkedin_url: "",
    portfolio_url: "",
    is_open_to_mentor: "false",
    is_seeking_mentorship: "false",
  });

  // const [city, setCity] = useState();
  // const changeCity = (e) => {
  //   setCity(e.target.value);
  //   profile.city = e.target.value;
  // };

  // const [location, setLocation] = useState(); // using location to avoid conflict with state keyword and the database currently only has location
  // const changeLocation = (e) => {
  //   setLocation(e.target.value);
  //   profile.location = e.target.value;
  // };
  
  // const [country, setCountry] = useState();
  // const changeCountry = (e) => {
  //   setCountry(e.target.value);
  //   profile.country = e.target.value;
  // };

  const [contact_preference, setPreference] = useState();
  const changePreference = (e) => {
    setPreference(e.target.value);
    profile.contact_preference = e.target.value;
  };

  const handleChange = (event) => {
    const { id, value } = event.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [id]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const isValid = auth.token !== null;

    console.log("is valid payload", isValid)

    if (isValid) {
      if (
        !profile.bio ||
        !(profile.city || profile.location || profile.country) ||
        !profile.contact_preference
      ) {
        alert(
          "Please complete minimum required fields - Bio, Location - either City, State or Country, and Contact Preference"
        );
      } else if (auth.token && profile.bio) {
        postProfile(
          profile.bio,
          profile.city,
          profile.location,
          profile.country,
          profile.picture_url,
          profile.is_hidden,
          profile.number_of_endorsements,
          profile.facebook_url,
          profile.instagram_url,
          profile.github_url,
          profile.linkedin_url,
          profile.portfolio_url,
          profile.contact_preference,
          profile.is_open_to_mentor,
          profile.is_seeking_mentorship
        ).then((response) => {
          navigate(`/profile/${response.id}`); // redirect to home page
        })
        .catch((error) => {
          alert(error.message); // display error message to the user
        });
      }
    }
    else {
      alert("You must be logged in to create a profile");
    }
  };

  return (
    <section className="profile-form-container">
      <form>
        <div className="hide-profile">
          <p>Hide my profile</p>
            <ToggleSwitch Name="is_hidden" />
        </div>
        <h2>CREATE A PROFILE</h2>

        <div>
          <label htmlFor="bio">BIO</label>
          <textarea
            id="bio"
            rows={4}
            cols={50}
            placeholder="Write a bio of at least 3 sentences"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="profile_picture_url">Profile Picture URL</label>
          <input
            type="url"
            id="profile_picture_url"
            placeholder="Enter URL"
            onChange={handleChange}
          />
        </div>
        <LocationDropdowns />
        <div>
          <label htmlFor="facebook_url">Facebook URL</label>
          <input
            type="url"
            id="facebook_url"
            placeholder="Enter URL"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="instagram_url">Instagram URL:</label>
          <input
            type="url"
            id="instagram_url"
            placeholder="Enter URL"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="github_url">Github URL</label>
          <input
            type="url"
            id="github_url"
            placeholder="Enter URL"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="linkedin_url">Linkedin URL</label>
          <input
            type="url"
            id="linkedin_url"
            placeholder="Enter URL"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="portfolio_url">Portfolio URL</label>
          <input
            type="url"
            id="portfolio_url"
            placeholder="Enter URL"
            onChange={handleChange}
          />
        </div>

        <div className="preferences">
          <div className="email">
            <label htmlFor="contact_preference_select">Contact Preference</label>
            <select value= {contact_preference} id="contact_preference_select" onChange={changePreference} defaultValue={""}>
              <option value=""></option>
              <option value="Email">Email</option>
              <option value="Facebook">Facebook</option>
              <option value="Instagram">Instagram</option>
              {/* <option value="Github">Github</option> */}
              <option value="LinkedIn">LinkedIn</option>
              {/* <option value="Portfolio">Portfolio</option> */}
            </select>
          </div>
          <div className="seeking-mentorship">
            <div className="hide-profile">
              <p>Seeking Mentorship</p>
                <ToggleSwitch Name="is_seeking_mentorship" />
            </div>
          </div>
          <div className="open-mentorship">
            <div className="hide-profile">
              <p>Open to Mentoring</p>
              <ToggleSwitch Name="is_open_to_mentor" />
            </div>
          </div>
        </div>

        <button className="userbutton" type="submit" onClick={handleSubmit}>
          Create Profile
        </button>
      </form>
    </section>
  );
}
export default CreateProfileForm;