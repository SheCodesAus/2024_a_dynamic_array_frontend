async function getUsers(){
    const url=`${import.meta.env.VITE_API_URL}/users`;


    const token = window.localStorage.getItem('token');
    
    const response = await fetch(url, {
        method:"GET",
        headers: {
        "Authorization": `Token ${token}`,
        },
    });
    
    if (!response.ok) {
        const fallbackError = "Error fetching users";

        const data = await response.json().catch(() =>{
            throw new Error(fallbackError);
        });
        const errorMessage = data.detail ?? fallbackError;
        if (errorMessage === "Invalid token.") {
            throw new Error('You must be an admin user to access this page');
        }
        throw new Error(errorMessage);
    }
    return await response.json();
}

export default getUsers;