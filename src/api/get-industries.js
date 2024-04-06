async function getIndustries(){
    const url=`${import.meta.env.VITE_API_URL}/industries/`;
    const response=await fetch(url,{method:"GET"});
    
    if (!response.ok) {
        const fallbackError = "Error fetching projects";
        const data = await response.json().catch(() =>{throw new Error(fallbackError);
        });
        const errorMessage = data?.detail ?? fallbackError;
        throw new Error(errorMessage);
    }
    const industriesData = await response.json();
    const industryOptions = industriesData.map(industry => ({name: industry.industry_name, id: industry.id}));
    return {industryOptions};
    }
    export default getIndustries;