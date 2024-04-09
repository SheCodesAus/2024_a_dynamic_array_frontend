async function putExperience(
    experience_type, 
    description, 
    experience_url, 
    picture_url, 
    is_present_experience,
    start_date, 
    end_date, experienceId) {
    const url = `${import.meta.env.VITE_API_URL}/experience/${experienceId}/`;
    const token =window.localStorage.getItem("token");

     const response = await fetch(url, {
        method: "PUT", // We need to tell the server that we are sending JSON data
    // so we set the Content-Type header to application/json
        headers: {
          "Content-Type": "application/json",
          "Authorization":`Token ${token}`,
        },
        
        body: JSON.stringify({
            "experience_type": experience_type,
            "description": description,
            "url": experience_url,
            "picture_url": picture_url,
            "is_present_experience": is_present_experience,
            "start_date": start_date,
            "end_date": end_date
        }), 
    });
        if (!response.ok) {
        const fallbackError = `Error trying to edit the experience`;
        const data = await response.json().catch(() => { throw new Error(fallbackError);
        });
        const errorMessage = data?.detail ?? fallbackError;
        throw new Error(errorMessage); }
        return await response.json(); 
    }

    export default putExperience;   