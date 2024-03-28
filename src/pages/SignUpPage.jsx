import SignupForm from "../components/Forms/SignupForm.jsx";

import "../components/SignUp/SignUpPage.css";
import name from "../assets/NavBar/name.png";
import signUP from "../assets/Illustrations/6585186.svg";

function SignUpPage() {
  return (
    <>
      <section className="signup-container">
        <div className="diversitech">
          <h3>
            <img className="name" src={name} alt="Diversitech name logo"/>
          </h3>
          {/*<p className="illustration">An illustration belongs here</p>*/}

          <img className="sign-up-form-imaage" src={signUP} alt="Diversitech name logo"/>
        </div>

        <div className="signup-form">
          <SignupForm/>
        </div>
      </section>
    </>
  );
}
export default SignUpPage;
