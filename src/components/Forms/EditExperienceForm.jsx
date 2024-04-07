import { useState } from "react";
import useExperience from "../../hooks/use-experience";
import putExperience from "../../api/put-experience";
import deleteExperience from "../../api/delete-experience";

function EditExperienceForm(props) {
   
  

    const experienceId = props.experienceId;
    const {experience, isLoading, error} = useExperience(experienceId);

    const [experienceData, setExperienceData] = useState([experience]
        );

        if (isLoading) {
            return (<p>loading...</p>);
                   };
        if (error) {
            return (<p>{error.message}</p>);   };

    const handleChange = (event) => {
    const { id, value } = event.target;
        setExperienceData((prevExperienceData) => ({
        ...prevExperienceData,
        [id]: value,
    }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (experience.description || experience.experience_url
            || experience.picture_url || experience.start_date || experience.end_date || experience.is_present_experience) {
        putExperience(
            experienceData.experience_type,
            experienceData.description,
            experienceData.experience_url,
            experienceData.picture_url,
            experienceData.is_present_experience,
            experienceData.start_date,
            experienceData.end_date,
             experienceId
        ).then((response) => {
        console.log(response);
        
        });            window.location.reload();

        
        }
        
        };

        const handleDelete = (event) => {

            event.preventDefault();
               props.setTrigger(false);
            deleteExperience(experienceId).then((response) => {
                console.log(response);
              
             

            }
            );
            window.location.reload();
        };
return(
        <div className="popup">
        <div className="popup-inner">
            <form>
                <div>
                    <label htmlFor="experience_type">Experience type: </label>

                        <select name="experience_type" id="experience_type" onChange={handleChange} defaultValue={experienceData.experience_type} >
                        <option value="Volunteering">Volunteering</option>
                        <option value="Project">Project</option>
                        <option value="Talk">Talk</option>
                        <option value="Mentoring">Mentoring</option>
                        <option value="Job">Job</option>
                        </select>

                </div>
                <div>
                    <label defaultValue={experienceData.description} htmlFor="description">Description: </label>
                    <input
                        type="text"
                        id="description"
                        placeholder="Describe your experience"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label defaultValue={experienceData.experience_url} htmlFor="experience_url">Experience URL: </label>
                    <input
                        type="text"
                        id="experience_url"
                        placeholder="Enter the url to the experience page"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label defaultValue={experienceData.picture_url} htmlFor="picture_url">Picture URL: </label>
                    <input
                        type="text"
                        id="picture_url"
                        placeholder="Enter the url to the experience picture"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label defaultValue={experienceData.start_date} htmlFor="start_date">Start Date: </label>
                    <input
                        type="text"
                        id="start_date"
                        placeholder="MM/YYYY"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label defaultValue={experienceData.end_date} htmlFor="end_date">End Date: </label>
                    <input
                        type="text"
                        id="end_date"
                        disabled={experience.is_present_experience}
                        placeholder="MM/YYYY"
                        onChange={handleChange}
                    />
                </div>
                <div className='present-container-checkbox'>
                    <input defaultValue={experienceData.is_present_experience}
                        type="checkbox"
                        id="is_present_experience"
                        onChange={handleChange}
                    />
                    <label htmlFor="is_present_experience m-0">Present</label>
                </div>

                <button type="submit" onClick={handleSubmit} className="close btn btn-primary mb-1 mt-2">Save</button>
                <button onClick={() => props.setTrigger(false)} className="close btn btn-secondary">Close</button>
                <button id="delete-experience-button" type="submit" onClick={handleDelete} className="close btn btn-secondary">Delete</button>
                {props.children}
            </form>
        </div>
    </div>
)
};

export default EditExperienceForm;

