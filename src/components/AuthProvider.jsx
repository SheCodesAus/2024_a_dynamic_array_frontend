import { createContext,  useState} from "react";  

export const AuthContext = createContext(); // create a context object
export const AuthProvider = (props) =>{
    const [auth, setAuth] = useState({
        token: window.localStorage.getItem("token"),
        user_id: Number(window.localStorage.getItem("user_id")),
        is_staff: window.localStorage.getItem("is_staff"),
        // username: window.localStorage.getItem("username"),
    });

return (
    <AuthContext.Provider value={{ auth, setAuth }}>
        {props.children}
    </AuthContext.Provider>
);
};
