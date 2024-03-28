async function postLogin(username,password) {
    const url = 
    `${import.meta.env.VITE_API_URL}/api-token-auth/`
    // to test in local: comment line above and uncomment line below (also check url in line below matches your local backend url)
    // `http://127.0.0.1:8000/api-token-auth/`;
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "username": username,
            "password": password,
        }),
    });
    if (!response.ok){
        const fallbackError = "Error trying to login";
        const data = await response.json().catch(() => {
            throw new Error(fallbackError);
        
        });
        const errorMessage = data?.detail ?? fallbackError;
        throw new Error(errorMessage);
    }
    return await response.json();
}
export default postLogin;