import React from "react";
import "../ProfileCards/Paginate.css";

const Paginate = ({
  profilesPerPage,
  totalProfiles,
  paginate,
  previousPage,
  nextPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProfiles / profilesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <div className="pagination-container"></div>
      <ul className="pagination">
        <li onClick={previousPage} className="page-number">
          Previous
        </li>
        {pageNumbers.map((number) => (
          <li
            key={number}
            className="page-number"
            onClick={() => paginate(number)}
          >
            {number}
          </li>
        ))}
        <li onClick={nextPage} className="page-number">
          Next
        </li>
      </ul>
    </>
  );
};
export default Paginate;
