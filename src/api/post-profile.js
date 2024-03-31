async function postProfile(
    bio,
    city,
    location,
    country,
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
            "city": city,
            "location": location,
            "country": country,
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
        const fallbackError = "Error trying to signup";
        const data = await response.json().catch(() => {
            throw new Error(fallbackError);
        
        });
        console.log("data object from post-profile", data)
        const errorMessage = data?.detail ?? fallbackError;
        throw new Error(errorMessage);
    }
    return await response.json();
}
export default postProfile;