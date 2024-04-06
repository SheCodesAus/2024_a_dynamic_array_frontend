import "../../components/ExperienceCard/ExperienceCard.css";
import { BsLink45Deg } from "react-icons/bs";
import { MdModeEdit } from "react-icons/md";
import {useAuth} from "../../hooks/use-auth";
import EditExperienceForm from "../Forms/EditExperienceForm";
import { useState } from "react";

function ExperienceCard(props) {

  const { experienceData, profileOwner } = props;
  const {auth, setAuth} = useAuth();
  const [editExperiencePopUp, setEditExperiencePopUp] = useState(false)

  function parseDate(date){
    
    // alert(date);
  
    let new_date = String(date).split('-');
    const month = new_date[1] - 1;
    const year = new_date[0];
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    console.log(new_date)
    console.log(month)
    console.log(year)
    new_date =  String(monthNames[month] + " " + year);
    return new_date;
  }
  

  return (


    <div className="experience-card-container">
{auth.token && auth.user_id==profileOwner
        ? (<a onClick={() => setEditExperiencePopUp(true)}>
              <MdModeEdit
                style={{ color: "#4078c0", width: "24px", height: "24px" }}
              />
            </a>)
        : <br/>}    
      <div className="Project-image">
        <img
          src={experienceData.picture_url}
          // alt="Profile Placeholder"
          style={{ width: "300px", height: "180px" }}
        />
      </div>


      <div>
        <p>Type of experience: {experienceData.experience_type} </p>
        {!experienceData.end_date && !experienceData.is_present_experience
        ? <p> {parseDate(experienceData.start_date)} </p>
        :<>
          {experienceData.is_present_experience 
          ? <p>{parseDate(experienceData.start_date)} - Present </p>
          : <p>{parseDate(experienceData.start_date)} - {parseDate(experienceData.end_date)} </p>
          }
          </>}
         <br/><p>{experienceData.description} </p>
      </div>

      <div className="experience-card-link-icon">
        <a target="_blank" href={experienceData.url}>
          <BsLink45Deg
            style={{ color: "#1877F2", width: "24px", height: "24px" }}
          />
        </a>
      </div>
      <div>
           
           {editExperiencePopUp ? <EditExperienceForm experienceId={experienceData.id} trigger={editExperiencePopUp} setTrigger={setEditExperiencePopUp}/> : null}
       </div>
    </div>

    
  );
}

export default ExperienceCard;
