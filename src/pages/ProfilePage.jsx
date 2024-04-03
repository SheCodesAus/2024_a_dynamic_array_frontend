import ProfilePageDetails from "../components/ProfilePage/ProfilePageRender";

function ProfilePageDisplay({ profile }) {
  console.log("profile in page display:", profile);
  return <ProfilePageDetails profile={profile} />;
}
export default ProfilePageDisplay;
