import { Outlet } from "react-router-dom";
import HomePageBanner from "../components/HomePage/HomePageBanner.jsx";
import "../index.css";
import "../components/HomePage/HomePage.css";
import Statement from "../components/Statement/Statement.jsx";

function HomePage() {
  return (
    <>
      <section>
        <HomePageBanner />
      </section>
      <section>
        <Statement />
      </section>

      <div>
        <p>Testing </p>
      </div>

      <Outlet />
    </>
  );
}
export default HomePage;
