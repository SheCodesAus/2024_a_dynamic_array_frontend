import { useState, useEffect } from "react";
import getUser from "../api/get-user";

function useUser(username){
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error,setError] = useState();

    useEffect(()=>{
        getUser(username)
        .then((user)=>{
            setUser(user);
            setIsLoading(false);
        })
        .catch((error)=>{
            setError(error);
            setIsLoading(false);
        });
    }, [username]);
    return {user, isLoading, error}
}
export default useUser;