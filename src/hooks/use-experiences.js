import {useState, useEffect} from 'react';
import getExperiences from '../api/get-experiences';

function useExperiences (){
    const [experiences, setExperiences] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] =useState();

    useEffect(()=> {
        getExperiences()
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