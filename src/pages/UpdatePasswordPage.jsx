import UpdatePasswordForm from "../components/Forms/UpdatePasswordForm";
import { Link } from "react-router-dom";

import "../components/Forms/UpdatePassword.css";
import name from "../assets/NavBar/name.png";

function UpdatePasswordPage() {
  return (
    <section className="signup-container">
      <div className="diversitech-2">
        <h3>
          <img className="name" src={name} alt="Diversitech name logo" />
        </h3>
        <p className="illustration">An illustration belongs here</p>
      </div>

      <div className="signup-form">
        <UpdatePasswordForm />
      </div>
    </section>
  );
}
export default UpdatePasswordPage;
