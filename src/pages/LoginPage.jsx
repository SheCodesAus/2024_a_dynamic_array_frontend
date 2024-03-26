import LoginForm from "../components/Forms/LoginForm";
import { Link } from "react-router-dom";

import "../components/Login/Login.css";
import name from "../assets/NavBar/name.png";

function LoginPage() {
  return (
    <section className="signup-container">
      <div className="diversitech-2">
        <h3>
          <img className="name" src={name} alt="Diversitech name logo" />
        </h3>
        <p className="illustration">An illustration belongs here</p>
      </div>

      <div class="signup-form">
        <LoginForm />
      </div>
    </section>
  );
}
export default LoginPage;
<LoginForm />;
