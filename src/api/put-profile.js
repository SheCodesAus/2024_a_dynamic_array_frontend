async function putProfile(
    profileId,
    bio,
    picture_url,
    is_hidden,
    number_of_endorsements,
    facebook_url,
    instagram_url,
    github_url,
    linkedin_url,
    portfolio_url,
    is_open_to_mentor,
    is_seeking_mentorship,
  ) {
    const url =
      `${import.meta.env.VITE_API_URL}/profiles/${profileIdId}/`;

    const token = window.localStorage.getItem('token');
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Token ${token}`,
      },
      body: JSON.stringify({
        profileId: profileId,
        bio: bio,
        picture_url: picture_url,
        is_hidden: is_hidden,
        number_of_endorsements: number_of_endorsements,
        facebook_url: facebook_url,
        instagram_url: instagram_url,
        github_url: github_url,
        linkedin_url: linkedin_url,
        portfolio_url: portfolio_url,
        is_open_to_mentor: is_open_to_mentor,
        is_seeking_mentorship: is_seeking_mentorship,
      }),
    });
    if (!response.ok) {
        const fallbackError = "Error trying to edit profile details";
      
        const data = await response.json().catch(() => {
          throw new Error(fallbackError);
        });
      
        let errorMessage = fallbackError;
      
        if (data && data.detail) {
          errorMessage = data.detail;
        } else if (data && data.bio && Array.isArray(data.bio)) {
          errorMessage = data.bio[0];
        }
      
        throw new Error(errorMessage);
      }
      
      return await response.json();      

  }
  export default putProfile;