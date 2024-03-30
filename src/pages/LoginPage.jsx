import LoginForm from "../components/Forms/LoginForm";
import loginSvg from "../assets/Illustrations/login.svg"
import "../components/Login/Login.css";

function LoginPage() {
    return (
        <section className="login-main-container">
            <div className="login-page-image-container">
                <img className="loginPageImage" src={loginSvg} alt="Diversitech name logo"/>
            </div>

            <div className="login-form-container">
                <LoginForm/>
            </div>
        </section>
    );
}

export default LoginPage;
