import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import HomePageBanner from "../components/HomePage/HomePageBanner.jsx";
import "../index.css";
import "../components/HomePage/HomePage.css";
import Statement from "../components/Statement/Statement.jsx";
import FilterResults from "../components/FilterSection/FilterResults.jsx";
import ProfileCards from "../components/ProfileCards/ProfileCards.jsx";
import useProfiles from "../hooks/use-profiles.js";
import TagSelect from "../components/Forms/SelectOptions/TagsMultiselectDropdown.jsx";

function doesProfileMatch(profileTags, filterTags) { //function to check if the profile tags match the filter tags
  return filterTags.every((filterTag) => profileTags.includes(filterTag)) //return true if all the filter tags are included in the profile tags
}

function filterProfiles(profiles, filterTags) { //function to filter the profiles based on the filter tags
  return (profiles.filter((profile) => doesProfileMatch(profile.tags, filterTags))) //return the profiles that match the filter tags
}

function HomePage() {
  const { profiles, isLoading, error } = useProfiles();
  const [selectedTags, setSelectedTags] = useState([]);
  const filteredProfiles = filterProfiles(profiles, selectedTags)
  
  console.log("SelectedTags:",selectedTags);
  console.log("FilteredProfiles:", filteredProfiles);
  console.log("Profiles:", profiles);

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
            <TagSelect setSelectedTags={setSelectedTags} />
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
              <ProfileCards profiles={filteredProfiles} />
            )}
          </div>
        </div>
      </section>

      <Outlet />
    </div>
  );
}
export default HomePage;
