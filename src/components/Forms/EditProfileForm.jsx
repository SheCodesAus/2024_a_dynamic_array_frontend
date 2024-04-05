import { useState } from "react";
import putProfile from "../../api/put-profile";
import { useParams } from "react-router-dom";

function EditProfileForm(props) {
    const { user, onSave } = props;
    const { id } = useParams();
    const [updatedProfile , setUpdatedProfile ] = useState({
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

    const handleChange = (e) => {
       const { id, value } = e.target;
       setUpdatedProfile((prevProfile) => ({
        ...prevProfile,
        [id]: value,
       })); 
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const isValid = 
        !!updatedProfile.bio ||
        !!updatedProfile.picture_url ||
        !!updatedProfile.is_hidden ||
        !!updatedProfile.number_of_endorsements ||
        !!updatedProfile.facebook_url ||
        !!updatedProfile.instagram_url ||
        !!updatedProfile.github_url ||
        !!updatedProfile.linkedin_url ||
        !!updatedProfile.portfolio_url ||
        !!updatedProfile.is_open_to_mentor ||
        !!updatedProfile.is_seeking_mentorship


        if (isValid) {
            putProfile(
                profile.id,
                updatedProfile.bio,
                updatedProfile.picture_url,
                updatedProfile.is_hidden,
                updatedProfile.number_of_endorsements,
                updatedProfile.facebook_url,
                updatedProfile.instagram_url,
                updatedProfile.github_url,
                updatedProfile.linkedin_url,
                updatedProfile.portfolio_url,
                updatedProfile.is_open_to_mentor,
                updatedProfile.is_seeking_mentorship
            ).then((response) => {
                onSave(response);
            }).catch((error) => {
                window.alert(error.message);
            });
        }
    };

    return (
        <section className="profile-form-container">
            <form>
                <div className="hide-profile">
                    <p>Hide my profile</p>
                    <ToggleSwitch Name="is_hidden"/>
                </div>
                <h2 className="edit-profile-form-title">EDIT PROFILE</h2>

                <div>
                    <label htmlFor="bio">BIO</label>
                    <textarea
                        id="bio"
                        rows={4}
                        cols={50}
                        value={updatedProfile.bio}
                        placeholder={updatedProfile.bio}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="picture_url">Profile Picture URL</label>
                    <input
                        type="url"
                        id="picture_url"
                        value={updatedProfile.picture_url}
                        placeholder={updatedProfile.picture_url}
                        onChange={handleChange}
                    />
                </div>
                <LocationDropdowns countryIso2={countryIso2} stateIso2={stateIso2} setStateIso2={setStateIso2}
                                    setSelectedCityId={setSelectedCityId} setCountryIso2={setCountryIso2}/>
                <div>
                    <label htmlFor="facebook_url">Facebook URL</label>
                    <input
                        type="url"
                        id="facebook_url"
                        value={updatedProfile.facebook_url}
                        placeholder={updatedProfile.facebook_url}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="instagram_url">Instagram URL:</label>
                    <input
                        type="url"
                        id="instagram_url"
                        value={updatedProfile.instagram_url}
                        placeholder={updatedProfile.instagram_url}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="github_url">Github URL</label>
                    <input
                        type="url"
                        id="github_url"
                        value={updatedProfile.github_url}
                        placeholder={updatedProfile.github_url}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="linkedin_url">Linkedin URL</label>
                    <input
                        type="url"
                        id="linkedin_url"
                        value={updatedProfile.linkedin_url}
                        placeholder={updatedProfile.linkedin_url}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="portfolio_url">Portfolio URL</label>
                    <input
                        type="url"
                        id="portfolio_url"
                        value={updatedProfile.portfolio_url}
                        placeholder={updatedProfile.portfolio_url}
                        onChange={handleChange}
                    />
                </div>
                <div className="tags and industries">
                    <label htmlFor="tags">Tags</label>
                    <TagSelect/>
                    <label htmlFor="industries">Industries</label>
                    <IndustrySelect/>
                </div>
                <div className="Contact-preferences">
                    <div className="email">
                        <label htmlFor="contact_preference_select">Contact Preference</label>
                        <select
                            value={contact_preference}
                            id="contact_preference_select"
                            onChange={changePreference}
                        >
                            <option value=""></option>
                            <option value="Email">Email</option>
                            <option value="Facebook">Facebook</option>
                            <option value="Instagram">Instagram</option>
                            {/* <option value="Github">Github</option> */}
                            <option value="LinkedIn">LinkedIn</option>
                            {/* <option value="Portfolio">Portfolio</option> */}
                        </select>
                    </div>
                    </div>
                    <div className="preferences">
                    <div className="seeking-mentorship">
                        <div className="hide-profile">
                            <p>Seeking Mentorship</p>
                            <ToggleSwitch Name="is_seeking_mentorship"/>
                        </div>
                    </div>
                    <div className="open-mentorship">
                        <div className="hide-profile">
                            <p>Open to Mentoring</p>
                            <ToggleSwitch Name="is_open_to_mentor"/>
                        </div>
                    </div>

                </div>
                <button onClick={handleSubmit}>Update</button>
            </form>
        </section>
    );

}

export default EditProfileForm;