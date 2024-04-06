import { useState } from "react";
import postPasswordUpdate from "../../api/post-update-password";
import { useAuth } from "../../hooks/use-auth";
import "../Forms/UpdatePassword.css";
import "../Forms/SignupForm.css";
import { useNavigate, Link } from "react-router-dom"; // import the useNavigate hook

function UpdatePasswordForm() {
  const navigate = useNavigate(); // use the navigate hook
  const { auth, setAuth } = useAuth();
  const [password, setPassword] = useState({
    old_password: "",
    new_password: "",
    new_password_confirmed: "",
  });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setPassword((prevPassword) => ({
      ...prevPassword,
      [id]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      !password.old_password ||
      !password.new_password ||
      !password.new_password_confirmed
    ) {
      alert("Please fill in all fields");
    } else if (
      password.old_password &&
      password.new_password &&
      password.new_password_confirmed
    ) {
      postPasswordUpdate(
        password.old_password,
        password.new_password,
        password.new_password_confirmed
      ).then(() => {
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("user_id");
        window.localStorage.removeItem("is_staff");
        setAuth({ token: null, user_id: null, is_staff: null });
        navigate("/login"); // redirect to login page
      });
    }
  };

  return (
    <section className="form-container">
      <form className="update-password-form">
        <div>
          <label htmlFor="old_password">Old Password</label>
          <input
            type="password"
            id="old_password"
            placeholder="Old Password"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="new_password">New Password</label>
          <input
            type="password"
            id="new_password"
            placeholder="New Password"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="new_password_confirmed">Confirm New Password</label>
          <input
            type="password"
            id="new_password_confirmed"
            placeholder="Confirm New Password"
            onChange={handleChange}
          />
        </div>
        <button
          className="btn btn-primary"
          type="submit"
          onClick={handleSubmit}
        >
          Update Password!
        </button>
      </form>
    </section>
  );
}
export default UpdatePasswordForm;
