import LoginForm from "../components/Forms/LoginForm";
import { Link } from "react-router-dom";

import "../components/Login/Login.css";

function LoginPage() {
  return (
    <div>
      <LoginForm />
      OR
      <p>
        <Link to="/signup">Sign Up Here</Link>
      </p>
    </div>
  );
}
export default LoginPage;
