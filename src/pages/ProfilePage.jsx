import { BsPlus } from "react-icons/bs";
import { MdModeEdit } from "react-icons/md";
import ExperienceCard from "./../components/ExperienceCard/ExperienceCard";

function ProfilePage() {
  return (
    <div className="profile-page-container">
      <div className="profile-page-header">
        <div className="profile-image">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile Placeholder"
          />
        </div>
        <span>8 endorsements</span>
      </div>
      <div className="profile-details">
        <h3>Full Name</h3>
        <p>Current Position</p>
        <p>Location</p>
        <div className="profile-buttons">
          <button>Seeking mentorship</button>
          <button>Open to mentorship</button>
        </div>
      </div>
      <hr className="hr" />

      <div className="bio-section">
        <h3>Bio:</h3>
        <p>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before the final copy is available.
        </p>
      </div>
      <hr className="hr" />
      <div className="skills-section">
        <h3>Skill Tags:</h3>
        <div className="skill-tags">
          <div>Development</div>
          <div>Development</div>
          <div>Development</div>
        </div>
        <div>
          <h3>Industry Tags:</h3>
          <div className="industry-tags">
            <div>Security</div>
            <div>Security</div>
            <div>Security</div>
          </div>
        </div>
        <a target="_blank" href="#">
          <MdModeEdit
            style={{ color: "#4078c0", width: "24px", height: "24px" }}
          />
        </a>
      </div>
      <hr className="hr" />
      <div className="experiences-section">
        <h3>Experiences</h3>
        <div className="experience-icons">
          <a target="_blank" href="#">
            <MdModeEdit
              style={{ color: "#4078c0", width: "24px", height: "24px" }}
            />
          </a>
          <a target="_blank" href="#">
            <BsPlus
              style={{ color: "#4078c0", width: "24px", height: "24px" }}
            />
          </a>
        </div>
      </div>
      <div className="experience-card-container">
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </div>
  );
}

export default ProfilePage;
