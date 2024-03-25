async function postProile(
    bio,
    city,
    state,
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
    const url = `${import.meta.env.VITE_API_URL}/profiles/`;
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "bio": bio,
            "city": city,
            "state": state,
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
        })
    });
    if (!response.ok){
        const fallbackError = "Error trying to signup";
        const data = await response.json().catch(() => {
            throw new Error(fallbackError);
        
        });
        const errorMessage = data?.detail ?? fallbackError;
        throw new Error(errorMessage);
    }
    return await response.json();
}
export default postProile;