import { Outlet } from "react-router-dom";
import HomePageBanner from "../components/HomePage/HomePageBanner.jsx";
import "../index.css";
import "../components/HomePage/HomePage.css";
import Statement from "../components/Statement/Statement.jsx";
import FilterSection from "../components/FilterSection/FilterSection.jsx";
import ProfileCards from "../components/ProfileCards/ProfileCards.jsx";

function HomePage() {
  return (
    <>
      <section>
        <HomePageBanner />
        <Statement />
        <FilterSection />
        <ProfileCards />
      </section>

      <Outlet />
    </>
  );
}
export default HomePage;
