import Footer from "../components/Footer/Footer.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import { BsEdit, BsPlus } from "react-icons/bs";

function ProfilePage() {
  return (
    <div className="profile-page-container">
      <div className="profile-page-header">
        <div className="profile-image">
          <img src="https://via.placeholder.com/68" alt="Profile Placeholder" />
        </div>
        <span>8 endorsements</span>
      </div>
      <div>
        <h3>Full name</h3>
        <p>Current Position</p>
        <p>Location</p>
      </div>
      <div>
        <button>Seeking mentorship</button>
        <button>Open to mentorship</button>
      </div>
      <hr className="hr" />

      <div>
        <h3>BIO:</h3>
        <p>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before the final copy is available.
        </p>
      </div>
      <hr className="hr" />
      <div>
        <h3>Skill tags:</h3>
        <div className="skill-tags">
          <div>Development</div>
          <div>Development</div>
          <div>Development</div>
        </div>
        <div>
          <h3>Industry tags:</h3>
          <div className="industry-tags">
            <div>Security</div>
            <div>Security</div>
            <div>Security</div>
          </div>
        </div>
        <a target="_blank" href="#">
          <BsEdit style={{ color: "#4078c0", width: "24px", height: "24px" }} />
        </a>
      </div>
      <hr className="hr" />
      <div>
        <h3>Experiences</h3>
        <a target="_blank" href="#">
          <BsEdit style={{ color: "#4078c0", width: "24px", height: "24px" }} />
        </a>
        <a target="_blank" href="#">
          <BsPlus style={{ color: "#4078c0", width: "24px", height: "24px" }} />
        </a>
      </div>
    </div>
  );
}

export default ProfilePage;
