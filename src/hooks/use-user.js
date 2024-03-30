import { useState, useEffect } from "react";
import getUser from "../api/get-user.js";

function useUser(username){
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error,setError] = useState();

    useEffect(()=>{
        console.log('Fetching user data for user ID:', username); 
        getUser(username)
        .then((user)=>{
            console.log('User data fetched successfully:', username)
            setUser(user);
            setIsLoading(false);
        })
        .catch((error)=>{
            console.error('Error fetching user data:', error);
            setError(error);
            setIsLoading(false);
        });
    }, [username]);
    return {user, isLoading, error}
}
export default useUser;