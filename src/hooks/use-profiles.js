import {useState, useEffect} from 'react';
import getProfiles from "../api/get-profiles";

function useProfiles (){
    const [profiles, setProfiles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] =useState();

    useEffect(()=> {
        getProfiles()
        .then((profiles) =>{
            setProfiles(profiles);
            setIsLoading(false);
            console.log("inside profiles hook", profiles);
        })
        .catch((error)=>{
            setError(error);
            setIsLoading(false);
        });
    }, ([]));
    return {profiles, isLoading, error};

}
export default useProfiles;