async function getTags(){
    // const url=`${import.meta.env.VITE_API_URL}/tags/`;
    const url=`http://127.0.0.1:8000/tags/`;
    const response=await fetch(url,{method:"GET"});
    
    if (!response.ok) {
        const fallbackError = "Error fetching projects";
        const data = await response.json().catch(() =>{throw new Error(fallbackError);
        });
        const errorMessage = data?.detail ?? fallbackError;
        throw new Error(errorMessage);
    }
    const tagsData = await response.json();
    const tagOptions = tagsData.map(tag => ({name: tag.tag_name, id: tag.id}));
    return {tagOptions};
    }
    export default getTags;