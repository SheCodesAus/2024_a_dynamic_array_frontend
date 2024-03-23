import { useState } from "react";
import postUser from "../../api/post-user";
import  postLogin from "../../api/post-login";

import { useNavigate } from "react-router-dom"; // import the useNavigate hook
import { useAuth } from "../../hooks/use-auth";

function SignupForm() {
    const navigate = useNavigate();// use the navigate hook
    const {auth, setAuth} = useAuth();
    const[user, setUser] = useState({
        username: "",
        password: "",
        first_name: "",
        last_name: "",
        email: "",
    });

const handleChange = (event) => {
    const { id, value } = event.target;
    setUser((prevUser) => ({
        ...prevUser,
        [id]: value,
    }));
};

const handleSubmit = (event) => {
    event.preventDefault();
    console.log("signup handlesubmit called")
    if (!user.username || !user.password) {
        console.log("missing username or password");
    } else if (user.username && user.password){
        postUser(
            user.username, 
            user.password,
            user.email,
            user.first_name,
            user.last_name
        ).then(() => {
            postLogin(
                user.username, 
                user.password).then((response) => {
                    window.localStorage.setItem("token", response.token);
                    setAuth({ token: response.token });
                    navigate("/"); // redirect to home page
                });
    });
    }
};


    return (
    <form>SIGN UP
        <div>
            <label htmlFor="first_name">First Name:</label>
            <input 
                type="text" 
                id="first_name" 
                placeholder="First Name"
                onChange={handleChange}
            />
        </div>
        <div>
            <label htmlFor="last_name">Last Name:</label>
            <input 
                type="text" 
                id="last_name" 
                placeholder="Last Name"
                onChange={handleChange}
            />       
        </div>
        <div>
            <label htmlFor="email">Email:</label>
            <input 
                type="text" 
                id="email" 
                placeholder="Email address"
                onChange={handleChange}
            />       
        </div>
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
                Sign up
        </button>    
    </form>  
    );
}
export default SignupForm;