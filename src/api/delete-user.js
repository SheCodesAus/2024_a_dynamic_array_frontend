async function deleteUser(username) {
    const url = `${import.meta.env.VITE_API_URL}/users/${username}`;

    const token = window.localStorage.getItem('token');

    const response = await fetch(url, {
        method: "DELETE",
        headers: {
        "Authorization": `Token ${token}`,
        },
    });

    if (!response.ok) {
        const fallbackError = `Error deleting user with user id ${userId}`;

        const data = await response.json().catch(() => {
          throw new Error(fallbackError);
        });

        const errorMessage = data?.detail ?? fallbackError;
        throw new Error(errorMessage);
      }
      return await response.json();
}

export default deleteUser;
