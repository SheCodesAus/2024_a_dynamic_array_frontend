import "../../components/ProfileCards/ProfileCards.css";
import ProfileCard from "./ProfileCard";
import { useState, useEffect } from "react";

function ProfileCards({ profiles }) {
  const [shuffledProfiles, setShuffledProfiles] = useState([]);

  useEffect(() => {
    const allProfiles = profiles.flat();
    const shuffled = shuffleArray(allProfiles);
    setShuffledProfiles(shuffled);
  }, []);

  //the function to shuffle the array elements(Fisher-Yates algorithm)
  const shuffleArray = (array) => {
    const shuffledArray = [...array]; //creates a copy of the original array
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ]; //swap the current element with a random element
    }
    return shuffledArray;
  };

  return (
    <div className="profile-cards-container">
      {shuffledProfiles.map((profile, index) => (
        <ProfileCard key={index} profile={profile} />
      ))}
    </div>
  );
}

export default ProfileCards;
