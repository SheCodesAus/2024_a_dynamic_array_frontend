async function postUser(
  username,
  password,
  email,
  first_name,
  last_name,
  accepted_terms
) {
  const url =
    `${import.meta.env.VITE_API_URL}/users/`

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      password: password,
      email: email,
      first_name: first_name,
      last_name: last_name,
      accepted_terms: accepted_terms.toString(),
    }),
  });
  if (!response.ok) {
    const fallbackError = "Error trying to signup";
    
    const data = await response.json().catch(() => {
      throw new Error(fallbackError);
    });

    let errorMessage = fallbackError;

    if (data && data.username && Array.isArray(data.username)) {
      errorMessage = data.username[0];
    } else if (data && data.email && Array.isArray(data.email)) {
      errorMessage = data.email[0];
    }
    throw new Error(errorMessage);
  }
  return await response.json();

}

export default postUser;
