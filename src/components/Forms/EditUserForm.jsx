import { useState } from "react";
import putUser from "../../api/put-user";
import { useParams } from "react-router-dom";
import "../Forms/EditUserForm.css";
import "../Forms/SignupForm.css";

function EditUserForm(props) {
  const { user, onSave } = props;
  const { id } = useParams();
  const [updatedUser, setUpdatedUser] = useState({
    id: user.id,
    username: user.username,
    email: user.email,
    first_name: user.first_name,
    last_name: user.last_name,
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setUpdatedUser((prevUser) => ({
      ...prevUser,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid =
      !!updatedUser.username ||
      !!updatedUser.email ||
      !!updatedUser.first_name ||
      !!updatedUser.last_name;

    if (isValid) {
      putUser(
        user.id,
        updatedUser.username,
        updatedUser.email,
        updatedUser.first_name,
        updatedUser.last_name
      )
        .then((response) => {
          onSave(response);
        })
        .catch((error) => {
          window.alert(error.message);
        });
    }
  };

  return (
    <section className="user-form-container">
      <form className="signup-form">
        <h2 className="sign-up-form-title">EDIT YOUR DETAILS</h2>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={updatedUser.username}
            placeholder={updatedUser.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            value={updatedUser.email}
            placeholder={updatedUser.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="first_name">First Name:</label>
          <input
            type="text"
            id="first_name"
            value={updatedUser.first_name}
            placeholder={updatedUser.first_name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="last_name">Last Name:</label>
          <input
            type="text"
            id="last_name"
            value={updatedUser.last_name}
            placeholder={updatedUser.last_name}
            onChange={handleChange}
          />
        </div>
        <button className="btn btn-primary" onClick={handleSubmit}>
          Update
        </button>
      </form>
    </section>
  );
}

export default EditUserForm;
