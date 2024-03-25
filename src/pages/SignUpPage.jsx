import SignupForm from "../components/Forms/SignupForm.jsx";

import "../components/SignUp/SignUpPage.css";
import name from "../assets/NavBar/name.png";

function SignUpPage() {
  return (
    <>
      <div className="signup-container">
        <div class="diversitech">
          <h3>
            <img className="name" src={name} alt="Diversitech name logo" />
          </h3>
          <p className="illustration">An illustration belongs here</p>
        </div>

        <div class="signup-form">
          <SignupForm />
        </div>
      </div>
    </>
  );
}
export default SignUpPage;
