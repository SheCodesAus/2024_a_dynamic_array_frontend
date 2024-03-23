import { useState } from "react";
import postProfile from "../../api/post-profile";

import { useNavigate } from "react-router-dom"; // import the useNavigate hook
import { useAuth } from "../../hooks/use-auth";

function CreateProfileForm() {
    const navigate = useNavigate();// use the navigate hook
    const {auth, setAuth} = useAuth();
    const[profile, setProfile] = useState({
        bio : "",
        city: "",
        state: "",
        country: "",
        picture_url : "",
        is_hidden : "False",
        number_of_endorsements : 0,
        facebook_url : "",
        instagram_url : "",
        github_url : "",
        linkedin_url : "",
        portfolio_url : "",
        contact_preference : "",
        is_open_to_mentor : "",
        is_seeking_mentorship : "",
    });

const handleChange = (event) => {
    const { id, value } = event.target;
    setProfile((prevProfile) => ({
        ...prevProfile,
        [id]: value,
    }));
};

const handleSubmit = (event) => {
    event.preventDefault();
    if (!profile.bio || !(profile.city || profile.state || profile.country) || !profile.contact_preference) {
        alert("Please complete minimum required fields - Bio, Location - either City, State or Country, and Contact Preference");
    } else if (auth.token && profile.bio){
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
            profile.is_seeking_mentorship,
            ).then((
                response
            ) => {
                navigate(`/profile/${response.id}`); // redirect to home page
                }
                );
    };
    }

    return (
    <form>CREATE A PROFILE
        <div>
            <label htmlFor="bio">Bio:</label>
            <input 
                type="textarea" 
                id="bio" 
                placeholder="Write a bio of at least 3 sentences"
                onChange={handleChange}
            />
        </div>
        <div>
            <label htmlFor="area">Area:</label>
            <input 
                type="select" // add city dropdown picklist info here
                id="city" 
                placeholder="Select Area"
                onChange={handleChange}
            />
        </div>
            <label htmlFor="state">State:</label>
            <input 
                type="select" // add dropdown picklist info here
                id="state" 
                placeholder="Select State"
                onChange={handleChange}
            />  
        <div>
        </div>
            <label htmlFor="country">State:</label>
            <input 
                type="select" // add dropdown picklist info here
                id="country" 
                placeholder="Select Country"
                onChange={handleChange}
            />  
        <div>          
        </div>
        <div>
            <label htmlFor="picture_url">Profile Picture URL:</label>
            <input 
                type="url" 
                id="profile_picture_url" 
                placeholder="Enter URL"
                onChange={handleChange}
            />       
        </div>
        <div>
            <label htmlFor="facebook_url">Facebook URL:</label>
            <input 
                type="url" 
                id="facebook_url" 
                placeholder="Enter URL"
                onChange={handleChange}
            />       
        </div>
        <div>
            <label htmlFor="facebook_url">Facebook URL:</label>
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
            <label htmlFor="github_url">Github URL:</label>
            <input 
                type="url" 
                id="github_url" 
                placeholder="Enter URL"
                onChange={handleChange}
            />       
        </div>
        <div>
            <label htmlFor="linkedin_url">Linkedin URL:</label>
            <input 
                type="url" 
                id="linkedin_url" 
                placeholder="Enter URL"
                onChange={handleChange}
            />       
        </div>
        <div>
            <label htmlFor="portfolio_url">Portfolio URL:</label>
            <input 
                type="url" 
                id="portfolio_url" 
                placeholder="Enter URL"
                onChange={handleChange}
            />       
        </div>
        <div>
            <label htmlFor="contact_preference">Contact Preference:</label>
            <select 
                id="contact_preference"
                onChange={handleChange}>
                <option value="email">Email</option>
                <option value="facebook">Facebook</option>
                <option value="instagram">Instagram</option>
                <option value="github">Github</option>
                <option value="linkedin">Linkedin</option>
                <option value="portfolio">Portfolio</option>
            </select> 
        </div>
        <div>
            <label htmlFor="is_seeking_mentorship">Seeking Mentorship?:</label>
            <input 
                type="radio button"
                id="seeking_mentorship_selection" 
                onChange={handleChange}
            />
        </div>
        <div>
            <label htmlFor="is_open_to_mentoring">Open to being a Mentor?:</label>
            <input 
                type="radio button"
                id="open_to_mentoring_selection" 
                onChange={handleChange}
            />
        </div>
        <button 
            type="submit" 
            onClick={handleSubmit}>
                Sign up
        </button>    
    </form>  
    );
    }
export default CreateProfileForm;