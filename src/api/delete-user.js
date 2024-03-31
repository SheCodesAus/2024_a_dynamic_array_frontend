async function deleteUser(username) {
    const url = `${import.meta.env.VITE_API_URL}/users/${username}`;
    // to test in local: comment line above and uncomment line below (also check url in line below matches your local backend url)
    // const url=`http://127.0.0.1:8000/users/${username}`;

    const token = window.localStorage.getItem('token');

    const response = await fetch(url, { 
        method: "DELETE",
        headers: {
        "Authorization": `Token ${token}`,
        },
    });
   
    if (!response.ok) {
        const fallbackError = `Error deleting user with username ${username}`;
    
        const data = await response.json().catch(() => {
          throw new Error(fallbackError);
        });
    
        const errorMessage = data?.detail ?? fallbackError;
        throw new Error(errorMessage);
      }
      return await response.json();
}
    
export default deleteUser;
