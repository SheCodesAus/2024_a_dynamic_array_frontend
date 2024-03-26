import "../../components/ExperienceCard/ExperienceCard.css";
import { BsLink45Deg } from "react-icons/bs";
import { MdModeEdit } from "react-icons/md";
function ExperienceCard() {
  return (
    <div className="experience-card-container">
      <div className="Project-image">
        <img
          src="https://via.placeholder.com/168"
          alt="Profile Placeholder"
          style={{ width: "300px", height: "180px" }}
        />
      </div>

      <div>
        <p>Type of experience: </p>
        <p>Date created: </p>
      </div>
      <div className="experience-card-link-icon">
        <a target="_blank" href="#">
          <BsLink45Deg
            style={{ color: "#1877F2", width: "24px", height: "24px" }}
          />
        </a>
      </div>
    </div>
  );
}

export default ExperienceCard;
