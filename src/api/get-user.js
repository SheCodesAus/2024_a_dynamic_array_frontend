async function getUser(id) {
    const url = `${import.meta.env.VITE_API_URL}/users/${id}`;
    const response = await fetch(url, { method: "GET" });
    // const url=`http://127.0.0.1:8000/users/${id}`;
  
    if (!response.ok) {
      const fallbackError = `Error fetching user with user id ${id}`;
  
      const data = await response.json().catch(() => {
        throw new Error(fallbackError);
      });
  
      const errorMessage = data?.detail ?? fallbackError;
      throw new Error(errorMessage);
    }
    return await response.json();
  }
  
  export default getUser;