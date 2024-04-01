async function postProfile(
    bio,
    // city,
    // country,
    // state,
    location,
    picture_url,
    is_hidden,
    number_of_endorsements,
    facebook_url,
    instagram_url,
    github_url,
    linkedin_url,
    portfolio_url,
    contact_preference,
    is_open_to_mentor,
    is_seeking_mentorship) {

    const url = 
    `${import.meta.env.VITE_API_URL}/profiles/`
    // to test in local: comment line above and uncomment line below (also check url in line below matches your local backend url)
        // `http://127.0.0.1:8000/profiles/`;
    const token = window.localStorage.getItem("token");
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${token}`
        },
        body: JSON.stringify({
            "bio": bio,
            // "city": city,
            // "state": state,
            // "country": country,
            "location": location,
            "picture_url": picture_url,
            "is_hidden": is_hidden,
            "number_of_endorsements": number_of_endorsements,
            "facebook_url": facebook_url,
            "instagram_url": instagram_url,
            "github_url": github_url,
            "linkedin_url": linkedin_url,
            "portfolio_url": portfolio_url,
            "contact_preference": contact_preference,
            "is_open_to_mentor": is_open_to_mentor,
            "is_seeking_mentorship": is_seeking_mentorship,
            "tags": [],// to be implemented
            "industries": [],// to be implemented
        })
    });
    if (!response.ok){
        if (response.status === 403) {
            const data = await response.json();
            const errorMessage = data.detail 
            throw new Error(errorMessage);
        } else {
            const fallbackError = "Error trying to create a profile.";
            throw new Error(fallbackError);
            }
        }
    return await response.json();
}

export default postProfile;