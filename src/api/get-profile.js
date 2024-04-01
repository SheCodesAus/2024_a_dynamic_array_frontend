async function getProfile(profileId){
    // const url = `${import.meta.env.VITE_API_URL}profiles/${profileId}`;
    // to test in local: comment line above and uncomment line below (also check url in line below matches your local backend url)
    const url=`http://localhost:5173/profiles/${profileId}`;
    const response = await fetch (url,{method:"GET"});

    if (!response.ok) {
        const fallbackError = `Error fetching profile with Id"${profileId}`;
        const data= await response.json().catch(()=>{
            throw new Error(fallbackError);
        });
        const errorMessage = data?.detail ?? fallbackError;
        throw new Error(errorMessage);
    }
    const profileData = await response.json();
    return profileData;

}
export default getProfile;