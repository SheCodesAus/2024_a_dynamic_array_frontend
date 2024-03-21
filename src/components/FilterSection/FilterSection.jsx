import "../../components/FilterSection/FilterSection.css";
import { Outlet } from "react-router-dom";

function FilterSection() {
  return (
    <>
      <section className="filter-section">
        <h1>This is where the filter section goes</h1>
      </section>
      <Outlet />
    </>
  );
}
export default FilterSection;
