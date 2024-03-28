import "../../components/FilterSection/FilterSection.css";
import { Outlet } from "react-router-dom";

function FilterResults() {
  return (
    <>
      <section className="filter-section">
        <h1>**This is where the results of the filters goes**</h1>
      </section>
      <Outlet />
    </>
  );
}
export default FilterResults;
