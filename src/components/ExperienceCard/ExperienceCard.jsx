import "../../components/ExperienceCards/ExperienceCard.css";
import { BsLink45Deg } from "react-icons/bs";

function ExperienceCard() {
  return (
    <div className="experience-card-container">
      <div className="edit-action" contentEditable="true">
        Edit
      </div>
      <div className="Project-image">
        <div className="edit-action">Edit</div>
        <img src="https://via.placeholder.com/68" alt="Project Placeholder" />
      </div>

      <div>
        <p>Type of experience: </p>
        <p>Date created: </p>
      </div>
      <a target="_blank" href="#">
        <BsLink45Deg
          style={{ color: "#1877F2", width: "24px", height: "24px" }}
        />
      </a>
    </div>
  );
}

export default ExperienceCard;
