import "../../components/ProfileCards/ProfileCards.css";
import ProfileCard from "./ProfileCard";

function ProfileCards({ profiles }) {
  return (
    <div className="profile-cards-container">
      {profiles.map((profile, index) => (
        <ProfileCard key={index} profile={profile} />
      ))}
    </div>
  );
}

export default ProfileCards;
