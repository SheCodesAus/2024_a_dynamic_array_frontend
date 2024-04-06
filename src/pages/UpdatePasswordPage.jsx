import UpdatePasswordForm from "../components/Forms/UpdatePasswordForm";

import contact from "../assets/Illustrations/contact.svg";
import "../pages/UpdatePassword.css";
import name from "../assets/NavBar/name.png";

function UpdatePasswordPage() {
  return (
    <div className="password-main-container">
      <section className="password-header">
        <h1>Update your Password</h1>
      </section>
      <section className="password-form-container">
        <div className="password-form">
          <UpdatePasswordForm />
        </div>
        <div className="password-form-illustration">
          <div className="diversitect-4">
            <img
              className="password-image"
              src={contact}
              alt="image illustraion suggesting to contact Diversitech"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
export default UpdatePasswordPage;
