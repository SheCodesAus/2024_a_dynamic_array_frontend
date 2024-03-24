import "../../components/ProfileCards/ProfileCards.css";
import ProfileCard from "./ProfileCard";

function ProfileCards() {
  return (
    <div className="profile-cards-container">
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
    </div>
  );
}

export default ProfileCards;
