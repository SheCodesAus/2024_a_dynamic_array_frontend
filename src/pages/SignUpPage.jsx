import SignupForm from "../components/Forms/SignupForm.jsx";
import "../components/SignUp/SignUpPage.css";
import signUP from "../assets/Illustrations/6585186.svg";

function SignUpPage() {
  return (

      <div className="signup-main-container main-container">

        <div className="signup-page-side">
          <img className="sign-up-form-image" src={signUP} alt="Diversitech name logo"/>

        </div>

        <div className="signup-form">
          <SignupForm/>
        </div>
      </div>

  );
}

export default SignUpPage;
