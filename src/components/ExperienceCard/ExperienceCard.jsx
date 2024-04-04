import "../../components/ExperienceCard/ExperienceCard.css";
import { BsLink45Deg } from "react-icons/bs";
import { MdModeEdit } from "react-icons/md";

function ExperienceCard(props) {

  const { experienceData } = props;

  return (
    <div className="experience-card-container">
      <div className="Project-image">
        <img
          src={experienceData.picture_url}
          // alt="Profile Placeholder"
          style={{ width: "300px", height: "180px" }}
        />
      </div>

      <div>
        <p>Type of experience: {experienceData.experience_type} </p>
        {!experienceData.end_date ? (
        <p> {experienceData.start_date} </p>
        ):(
        <p>{experienceData.start_date} - {experienceData.end_date} </p>
        )}
         <br/><p>{experienceData.description} </p>
      </div>

      <div className="experience-card-link-icon">
        <a target="_blank" href={experienceData.url}>
          <BsLink45Deg
            style={{ color: "#1877F2", width: "24px", height: "24px" }}
          />
        </a>
      </div>
    </div>
  );
}

export default ExperienceCard;
