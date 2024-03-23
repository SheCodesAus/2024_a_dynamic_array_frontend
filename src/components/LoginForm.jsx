import { useState } from "react";
import postLogin from "../../api/post-login";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/use-auth";

function LoginForm() {
    const navigate = useNavigate();
    const {auth, setAuth} = useAuth();
    const[credentials, setCredentials] = useState({
        username: "",
        password: "",
    });

const handleChange = (event) => {
    const { id, value } = event.target;
    setCredentials((prevCredentials) => ({
        ...prevCredentials,
        [id]: value,
    }));
};

const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handlesubmit called")
    if (!credentials.username || !credentials.password) {
        console.log("missing username or password");
    } else if (credentials.username && credentials.password){
        postLogin(
            credentials.username, 
            credentials.password
        ).then((response) => {
            window.localStorage.setItem("token", response.token);
            setAuth({ token: response.token,
                userID: response.user_id,
                username: response.username,});
            navigate("/"); // redirect to home page
        });
    }
};


    return (
    <form>
        <div>
            <label htmlFor="username">Username:</label>
            <input 
                type="text"
                id="username" 
                placeholder="Enter username"
                onChange={handleChange}
            />
        </div>
        <div>
            <label htmlFor="password">Password:</label>
            <input 
                type="password" 
                id="password" 
                placeholder="Password"
                onChange={handleChange}
            />      
        </div>
        <button 
            type="submit" 
            onClick={handleSubmit}>
                Login
        </button>    
    </form>  
    );
}
export default LoginForm;