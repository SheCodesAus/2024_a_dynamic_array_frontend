import {useState, useEffect} from 'react';
import getExperience from "../api/get-experience";


export default function useExperience(experienceId) {
    const [experience, setExperience] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        getExperience(experienceId).then((experience) => {
            setExperience(experience);
            setIsLoading(false);
        }).catch((error) => {
            setError(error);
            setIsLoading(false);
        });

    }, [experienceId]);

    
    return {experience, isLoading, error};}