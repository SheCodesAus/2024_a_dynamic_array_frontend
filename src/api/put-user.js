async function putUser(
    userId,
    username,
    email,
    first_name,
    last_name,
  ) {
    const url =
      `${import.meta.env.VITE_API_URL}/users/${userId}/`;

    const token = window.localStorage.getItem('token');
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Token ${token}`,
      },
      body: JSON.stringify({
        userId: userId,
        username: username,
        email: email,
        first_name: first_name,
        last_name: last_name,
      }),
    });
    if (!response.ok) {
      const fallbackError = "Error trying to edit user details";

      const data = await response.json().catch(() => {
        throw new Error(fallbackError);
      });

      let errorMessage = fallbackError;

      if (data && data.detail) {
        errorMessage = data.detail;
      } else if (data && data.username && Array.isArray(data.username)) {
        errorMessage = data.username[0];
      } else if (data && data.email && Array.isArray(data.email)) {
        errorMessage = data.email[0];
      }

      throw new Error(errorMessage);
    }
    return await response.json();

  }
  export default putUser;