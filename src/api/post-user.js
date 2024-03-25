async function postUser(username,password,email,first_name,last_name) {
    const url = `${import.meta.env.VITE_API_URL}/users/`;
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