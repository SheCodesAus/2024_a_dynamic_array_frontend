async function postUser(username,password,email,first_name,last_name,accepted_terms) {
    const url = 
    `${import.meta.env.VITE_API_URL}/users/`
// to test in local: comment line above and uncomment line below (also check url in line below matches your local backend url)
    // `http://127.0.0.1:8000/users/`;
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "username": username,
            "password": password,
            "email": email,
            "first_name": first_name,
            "last_name": last_name,
            "accepted_terms": accepted_terms.toString(),
        }),
       
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
export default postUser;