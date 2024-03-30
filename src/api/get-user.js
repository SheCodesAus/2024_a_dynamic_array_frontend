async function getUser(username){
    const url = `${import.meta.env.VITE_API_URL}/users/${username}`;
    // to test in local: comment line above and uncomment line below (also check url in line below matches your local backend url)
    // const url=`http://localhost:5173//profiles/${profileId}`;
    const response = await fetch (url,{method:"GET"});

    if (!response.ok) {
        const fallbackError = `Error fetching user with Id"${username}`;
        const data= await response.json().catch(()=>{
            throw new Error(fallbackError);
        });
        const errorMessage = data?.detail ?? fallbackError;
        throw new Error(errorMessage);
    }
    const userData = await response.json();

    console.log("User data:", userData);
    return userData;

}
export default getUser;