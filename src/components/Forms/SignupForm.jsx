import { useState } from "react";
import postUser from "../../api/post-user";
import postLogin from "../../api/post-login";

import { useNavigate, Link } from "react-router-dom"; // import the useNavigate hook
import { useAuth } from "../../hooks/use-auth";

import "../../components/Forms/SignupForm.css";

function SignupForm() {
  const navigate = useNavigate(); // use the navigate hook
  const { auth, setAuth } = useAuth();
  const [user, setUser] = useState({
    username: "",
    password: "",
    first_name: "",
    last_name: "",
    email: "",
  });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [id]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!user.username || !user.password) {
      alert("Please fill in all fields");
    } else if (user.username && user.password) {
      postUser(
        user.username,
        user.password,
        user.email,
        user.first_name,
        user.last_name
      ).then(() => {
        postLogin(user.username, user.password).then((response) => {
          window.localStorage.setItem("token", response.token);
          setAuth({ token: response.token });
          navigate("/"); // redirect to home page
        });
      });
    }
  };

  return (
    <section className="form-container">
      <form>
        <h2>SIGN UP</h2>
        <div>
          <label htmlFor="first_name">First Name</label>
          <input
            className="first-name"
            type="text"
            id="first_name"
            placeholder="First Name"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="last_name">Last Name</label>
          <input
            className="last-name"
            type="text"
            id="last_name"
            placeholder="Last Name"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            placeholder="Email address"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Enter username"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            onChange={handleChange}
          />
        </div>
        <button className="userbutton" type="submit" onClick={handleSubmit}>
          Sign up
        </button>
        <p className="login-link">
          Already have an account?
          <Link to="/login">Login</Link>
        </p>
      </form>
    </section>
  );
}
export default SignupForm;
