import React, { useState } from "react";
import postProfile from "../../api/post-profile";

import { useNavigate } from "react-router-dom"; // import the useNavigate hook
import { useAuth } from "../../hooks/use-auth";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch.jsx";
import "../../components/Forms/CreateProfile.css";

function CreateProfileForm() {
  const navigate = useNavigate(); // use the navigate hook
  const { auth, setAuth } = useAuth();
  const [profile, setProfile] = useState({
    bio: "",
    city: "",
    state: "",
    country: "",
    picture_url: "",
    is_hidden: "False",
    number_of_endorsements: 0,
    facebook_url: "",
    instagram_url: "",
    github_url: "",
    linkedin_url: "",
    portfolio_url: "",
    contact_preference: "",
    is_open_to_mentor: "False",
    is_seeking_mentorship: "False",
  });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [id]: value,
    }));
  };

  // handleOptionChange = changeEvent => {
  //     this.setState({
  //       selectedOption: changeEvent.target.value
  //     });
  //   };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      !profile.bio ||
      !(profile.city || profile.state || profile.country) ||
      !profile.contact_preference
    ) {
      alert(
        "Please complete minimum required fields - Bio, Location - either City, State or Country, and Contact Preference"
      );
    } else if (auth.token && profile.bio) {
      postProfile(
        profile.bio,
        profile.city,
        profile.state,
        profile.country,
        profile.picture_url,
        profile.is_hidden,
        profile.number_of_endorsements,
        profile.email_url,
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
      });
    }
  };

  return (
    <section className="profile-form-container">
      <form>
        <div className="hide-profile">
          <p>Hide my profile</p>
          <p>
            <ToggleSwitch Name="is_hidden" />
          </p>
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
          <label htmlFor="picture_url">Profile Picture URL</label>
          <input
            type="url"
            id="profile_picture_url"
            placeholder="Enter URL"
            onChange={handleChange}
          />
        </div>

        <div className="location">
          <div className="area-div">
            <label htmlFor="area">Area</label>
            <select id="area" onChange={handleChange}>
              {/* options to be fetched by API in future release */}
              <option value="North">NORTH</option>
              <option value="East">EAST</option>
              <option value="South">SOUTH</option>
              <option value="West">WEST</option>
            </select>
          </div>
          <div className="state-div">
            <label htmlFor="state">State</label>
            <select id="state_select" onChange={handleChange}>
              {/* options to be fetched by API in future release */}
              <option value="WA">WA</option>
              <option value="ACT">ACT</option>
              <option value="NSW">NSW</option>
              <option value="QLD">QLD</option>
              <option value="VIC">VIC</option>
              <option value="TAS">TAS</option>
              <option value="SA">SA</option>
            </select>
          </div>
          <div className="country-div">
            <label htmlFor="country">Country</label>
            <select id="country_select" onChange={handleChange}>
              {/* options to be fetched by API in future release */}
              <option value="Australia">Australia</option>
              <option value="New Zealand">New Zealand</option>
              <option value="Indonesia">Indonesia</option>
              <option value="Vietnam">Vietnam</option>
              <option value="Singapore">Singapore</option>
              <option value="China">China</option>
              <option value="Thailand">Thailand</option>
            </select>
          </div>
        </div>

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
            <label htmlFor="contact_preference">Contact Preference</label>
            <select id="contact_preference_select" onChange={handleChange}>
              <option value="email">Email</option>
              <option value="facebook">Facebook</option>
              <option value="instagram">Instagram</option>
              <option value="github">Github</option>
              <option value="linkedin">Linkedin</option>
              <option value="portfolio">Portfolio</option>
            </select>
          </div>
          <div className="seeking-mentorship">
            <div className="hide-profile">
              <p>Seeking Mentorship</p>
              <p>
                <ToggleSwitch Name="is_seeking_mentorship" />
              </p>
            </div>
          </div>
          <div className="open-mentorship">
            <div className="hide-profile">
              <p>Open to Mentoring</p>
              <p>
                <ToggleSwitch Name="is_open_to_mentor" />
              </p>
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
