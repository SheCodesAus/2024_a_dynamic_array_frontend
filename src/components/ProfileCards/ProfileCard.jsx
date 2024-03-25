import "../../components/ProfileCards/ProfileCard.css";
import {
  BsShare,
  BsFillCheckCircleFill,
  BsFacebook,
  BsGithub,
  BsLinkedin,
} from "react-icons/bs";

function ProfileCard() {
  return (
    <div className="profile--card-container">
      <div className="profile--card-header">
        <div className="profile-image">
          <img src="https://via.placeholder.com/68" alt="Profile Placeholder" />
        </div>

        <div>
          <h4>Sahar, Kavousi</h4>
          <p>Front End& UX</p>
        </div>
        <div className="profile--card-header-share">
          <div className="profile-header-social-menu">
            <button>
              <BsShare />
            </button>
          </div>
        </div>
      </div>

      <div className="profile--card-body">
        <div className=" profile--card-body-title">Mentorship Status:</div>
        <div className="profile-Card-Body">
          <div>
            <BsFillCheckCircleFill />
            <span style={{ marginLeft: "0.5rem" }}>Open to mentoring</span>
          </div>
          <div>
            <BsFillCheckCircleFill />
            <span style={{ marginLeft: "0.5rem" }}>Seeking mentorship</span>
          </div>
        </div>
        <hr className="hr" />
      </div>

      <div className="profile--card-footer">
        <div className="profile--card-footer-endorsement">
          <h4>Endorsement:</h4>
        </div>
        <div className="profile-card-action-container">
          <div className="profile-card-footer-social-media">
            <a target="_blank" href="#">
              <BsFacebook
                style={{ color: "#1877F2", width: "24px", height: "24px" }}
              />
            </a>
            <a target="_blank" href="#">
              <BsGithub
                style={{ color: "#4078c0", width: "24px", height: "24px" }}
              />
            </a>
            <a target="_blank" href="#">
              <BsLinkedin
                style={{ color: "#0077b5", width: "24px", height: "24px" }}
              />
            </a>
          </div>
          <button className="profile-card-footer-btn">Read More</button>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
