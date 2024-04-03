import { useState, useEffect } from "react";
import getProfile from "../api/get-profile";

function useProfile(profileId){
    const [profile, setProfile] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error,setError] = useState();

    useEffect(()=>{
      
        if (profileId) {
            getProfile(profileId)
              .then((profile) => {
                setProfile(profile);
                setIsLoading(false);
              })
              .catch((error) => {
                setError(error);
                setIsLoading(false);
              });
          } else {
            setIsLoading(false); // If profileId is undefined, set loading to false
          }
        }, [profileId]);
      
        return { profile, isLoading, error };
      }
      
      export default useProfile;