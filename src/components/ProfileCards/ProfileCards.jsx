import "../../components/ProfileCards/ProfileCards.css";
import ProfileCard from "./ProfileCard";
import { useState, useEffect } from "react";
import Paginate from "../ProfileCards/Paginate.jsx";
import { Link } from "react-router-dom";

function ProfileCards({ profiles }) {
  const [shuffledProfiles, setShuffledProfiles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [profilesPerPage] = useState(12);

  const indexOfLastProfile = currentPage * profilesPerPage;
  const indexOfFirstProfile = indexOfLastProfile - profilesPerPage;
  const currentProfiles = shuffledProfiles.slice(
    indexOfFirstProfile,
    indexOfLastProfile
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== Math.ceil(shuffledProfiles.length / profilesPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    const allProfiles = profiles.flat();
    const shuffled = shuffleArray(allProfiles);
    setShuffledProfiles(shuffled);
  }, [profiles]); //remount every time the profiles change

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
    <>
      <div className="profile-cards-container">
        {currentProfiles.map((profile, index) => (
          <ProfileCard key={index} profile={profile} />
        ))}
      </div>
      <div className="paginate-section">
        <div className="paginate-numbers">
          <Paginate
            profilesPerPage={profilesPerPage}
            totalProfiles={shuffledProfiles.length}
            paginate={paginate}
            previousPage={previousPage}
            nextPage={nextPage}
          />
        </div>
      </div>
    </>
  );
}

export default ProfileCards;
