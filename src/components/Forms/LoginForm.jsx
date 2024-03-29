import { useState } from "react";
import postLogin from "../../api/post-login";

import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../hooks/use-auth";

function LoginForm() {
  const navigate = useNavigate();
  const { auth, setAuth } = useAuth();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [id]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!credentials.username || !credentials.password) {
      alert("Please fill in all fields"); // unsure if this will work, needs testing
    } else if (credentials.username && credentials.password) {
      postLogin(credentials.username, credentials.password).then((response) => {
        window.localStorage.setItem("token", response.token);
        setAuth({
          token: response.token,
          userID: response.user_id,
          username: response.username,
        });
        navigate("/"); // redirect to home page
      });
    }
  };

  return (
    <section className="form-container">
      <form>
        <h2>LOGIN</h2>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            placeholder="Enter username"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            onChange={handleChange}
          />
        </div>
        <button className="userbutton" type="submit" onClick={handleSubmit}>
          Login
        </button>
        <p className="login-link">
          Don't have an account?
          <Link to="/signup"> Sign Up</Link>
        </p>
      </form>
    </section>
  );
}
export default LoginForm;
