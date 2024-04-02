import React from "react";
import ProfilePage from "./ProfilePage"; // Assuming this is the correct import path

function ProfilePageRender() {
  // Example profile data
  const profile = {
    owner: "profileOwnerId", // Example owner ID
    // Other profile data...
  };

  return (
    <div>
      {/* Render ProfilePage component and pass profile prop */}
      <ProfilePage profile={profile} />
    </div>
  );
}

export default ProfilePageRender;
