async function postLogin(username, password) {
  const url =
    `${import.meta.env.VITE_API_URL}/api-token-auth/`

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  });
  if (!response.ok) {
    const fallbackError = "Error trying to login";
    const data = await response.json().catch(() => {
      throw new Error(fallbackError);
    });

    let errorMessage = fallbackError;
    if (data && data.non_field_errors && Array.isArray(data.non_field_errors)) {
      errorMessage = data.non_field_errors[0];
    }
    throw new Error(errorMessage);
  }
  return await response.json();
}
export default postLogin;
