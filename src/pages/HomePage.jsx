import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import HomePageBanner from "../components/HomePage/HomePageBanner.jsx";
import "../index.css";
import "../components/HomePage/HomePage.css";
import Statement from "../components/Statement/Statement.jsx";
import FilterResults from "../components/FilterSection/FilterResults.jsx";
import ProfileCards from "../components/ProfileCards/ProfileCards.jsx";
import useProfiles from "../hooks/use-profiles.js";

function HomePage() {
  const { profiles, isLoading, error } = useProfiles();

  useEffect(() => {}, [profiles]);
  return (
    <div className="main-container">
      <HomePageBanner />
      <Statement />
      <section className="home-container">
        <div className="filter-results">
          <FilterResults />
        </div>
        <div className="home-body-container">
          <div className="filter-container">
            <h1>** Insert Filters here **</h1>
          </div>
          <div className="profile-card-container">
            {isLoading ? (
              <p>Loading...</p>
            ) : error ? (
              <p>
                OOps, sorry we are having some trouble retrieving this
                information!
              </p>
            ) : (
              <ProfileCards profiles={profiles} />
            )}
          </div>
        </div>
      </section>

      <Outlet />
    </div>
  );
}
export default HomePage;
