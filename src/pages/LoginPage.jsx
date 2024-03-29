import LoginForm from "../components/Forms/LoginForm";
import loginSvg from "../assets/Illustrations/login.svg"
import "../components/Login/Login.css";
import name from "../assets/NavBar/name.png";

function LoginPage() {
  return (
    <section className="login-main-container">
        <img className="diversiTech-name-logo" src={name} alt="Diversitech name logo"/>
        <img className="loginPageImage" src={loginSvg} alt="Diversitech name logo"/>
        <div className="">
            <LoginForm/>
        </div>
    </section>
  );
}
export default LoginPage;
