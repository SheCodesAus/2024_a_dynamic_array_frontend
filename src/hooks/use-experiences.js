import {useState, useEffect} from 'react';
import getExperiences from '../api/get-experiences';

function useExperiences (id){

    const profileId = id;
    const [experiences, setExperiences] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] =useState();

    useEffect(()=> {
        getExperiences(profileId)
        .then((experiences) =>{
            setExperiences(experiences);
            setIsLoading(false);
        })
        .catch((error)=>{
            setError(error);
            setIsLoading(false);
        });
    }, ([]));
    return {experiences, isLoading, error};

}
export default useExperiences;