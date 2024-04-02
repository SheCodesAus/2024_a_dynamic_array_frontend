async function postPasswordUpdate(
  old_password,
  new_password,
  new_password_confirmed
) {

  const url =
    `${import.meta.env.VITE_API_URL}/update-password/`

  const token = window.localStorage.getItem('token');
  
  const response = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Token ${token}`,
    },
    body: JSON.stringify({
      old_password: old_password,
      new_password: new_password,
      new_password_confirmed,
    }),
  });
  if (!response.ok) {
    const fallbackError = "Error trying to reset password";
    const data = await response.json().catch(() => {
      throw new Error(fallbackError);
    });
    const errorMessage = data?.detail ?? fallbackError;
    throw new Error(errorMessage);
  }
  return await response.json();
}
export default postPasswordUpdate;
