async function deleteExperience(experienceId) {
    const url = `${import.meta.env.VITE_API_URL}/experience/${experienceId}/`;

    const token =window.localStorage.getItem("token");

    const response = await fetch(url, {method: 'DELETE', headers: {
        "Content-Type": "application/json",
        "Authorization":`Token ${token}`,
      },});

    if(!response.ok){

        const fallbackError = 'Error fetching experience';

        const data = await response.json().catch(() =>{

            throw new Erro(fallbackError);
        })

        const errorMessage = data?.detail ?? fallbackError;
        throw new Error(errorMessage);
    }
    
     return await response.json();
}

export default deleteExperience;