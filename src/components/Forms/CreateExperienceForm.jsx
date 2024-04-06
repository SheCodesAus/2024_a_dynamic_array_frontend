import React from "react";
import "./CreateExperienceForm.css"
import postExperience from "../../api/post-experience";
import { useState } from "react";

function CreateExperienceForm(props) {
    const profileId = props.id;


    const [experience, setExperience] = useState({
        experience_type: "",
        description: "",
        experience_url: "",
        picture_url: "",
        is_present_experience: false,
        start_date: "",
        end_date: "",
        profile: `${profileId}`
      });

      const handleChange = (event) => {
        const { id, value } = event.target;
        setExperience((prevExperience) => ({
          ...prevExperience,
          [id]: value,
        }));
      };

      function parseDate(month, year){

        // alert(date);
        var dd = "01";
        var mm = month.getMonth() + 1; //January is 0!
        var yyyy = year;

        if (mm < 10) {
            mm = '0' + mm;
        }
        date =  dd + "-" + mm + "-" + yyyy;
        console.log(date);
        return date.toString();

      }


    //   }
      const handleSubmit = (event) => {
        event.preventDefault();
        props.setTrigger(false);
        if (experience.description && experience.experience_url
            && experience.picture_url && experience.start_date) {
            postExperience(
                experience.experience_type,
                experience.description,
                experience.experience_url,
                experience.picture_url,
                experience.is_present_experience,
                experience.start_date,
                experience.end_date,
                experience.profile,
                profileId
                ).then((response) => {

            console.log(response);
            console.log(experience.start_date);
            console.log(experience.end_date);

            event.preventDefault();

        });
        }
        };
        console.log(experience.start_date);
        console.log(experience.end_date);

    return (

        <div className="popup">
            <div className="popup-inner">
                <form>
                    <div>
                        <label htmlFor="experience_type">Experience type: </label>

                            <select name="experience_type" id="experience_type" onChange={handleChange} >
                            <option value="">Choose experience type</option>
                            <option value="Volunteering">Volunteering</option>
                            <option value="Project">Project</option>
                            <option value="Talk">Talk</option>
                            <option value="Mentoring">Mentoring</option>
                            <option value="Job">Job</option>
                            </select>

                    </div>
                    <div>
                        <label htmlFor="description">Description: </label>
                        <input
                            type="text"
                            id="description"
                            placeholder="Describe your experience"
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="experience_url">Experience URL: </label>
                        <input
                            type="text"
                            id="experience_url"
                            placeholder="Enter the url to the experience page"
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="picture_url">Picture URL: </label>
                        <input
                            type="text"
                            id="picture_url"
                            placeholder="Enter the url to the experience picture"
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="start_date">Start Date: </label>
                        <input
                            type="text"
                            id="start_date"
                            placeholder="MM/YYYY"
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="end_date">End Date: </label>
                        <input
                            type="text"
                            id="end_date"
                            placeholder="MM/YYYY"
                            onChange={handleChange}
                        />
                    </div>
                    <div className='present-container-checkbox'>
                        <input
                            type="checkbox"
                            id="is_present_experience"
                            onChange={handleChange}
                        />
                        <label htmlFor="is_present_experience m-0">Present</label>
                    </div>

                    <button type="submit" onClick={handleSubmit} className="close btn btn-primary mb-1 mt-2">Save</button>
                    <button onClick={() => props.setTrigger(false)} className="close btn btn-secondary">Close</button>
                    {props.children}
                </form>
            </div>
        </div>
    )
}

export default CreateExperienceForm;
