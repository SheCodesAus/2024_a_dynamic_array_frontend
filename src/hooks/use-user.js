import { useState, useEffect } from "react";
import getUser from "../api/get-user";

function useUser(id){
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error,setError] = useState();

    useEffect(()=>{
        getUser(id)
        .then((user)=>{
            setUser(user);
            setIsLoading(false);
        })
        .catch((error)=>{
            setError(error);
            setIsLoading(false);
        });
    }, [id]);
    return {user, isLoading, error}
}
export default useUser;