import { Outlet } from "react-router-dom";
import HomePageBanner from "../components/HomePage/HomePageBanner.jsx";
import "../index.css";
import "../components/HomePage/HomePage.css";
import Statement from "../components/Statement/Statement.jsx";
import FilterResults from "../components/FilterSection/FilterResults.jsx";
import ProfileCards from "../components/ProfileCards/ProfileCards.jsx";

function HomePage() {
  return (
    <>
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
            <ProfileCards />
          </div>
        </div>
      </section>

      <Outlet />
    </>
  );
}
export default HomePage;
