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
import IndustrySelect from "../components/Forms/SelectOptions/IndustriesMultiselectDropdown.jsx";

//filtering profile card logic

function doesProfileMatchTags(profileTags, filterTags) { //function to check if the profile tags match the filter tags
  return filterTags.every((filterTag) => profileTags.includes(filterTag)) //return true if all the filter tags are included in the profile tags
}

function doesProfileMatchIndustries(profileIndustries, filterIndustries) { //function to check if the profile Industries match the filter Industries
  return filterIndustries.every((filterIndustry) => profileIndustries.includes(filterIndustry)) //return true if all the filter Industries are included in the profile tags
}

function doesProfileMatchAllFilters(profileTags, filterTags, profileIndustries, filterIndustries) { //function to check if the profile matches the filter tags and filter Industries
  return doesProfileMatchTags(profileTags, filterTags) && doesProfileMatchIndustries(profileIndustries, filterIndustries) //return true if the profile matches the filter tags and filter Industries
}

  function filterProfiles(profiles, filterTags, filterIndustries) { //function to filter the profiles based on the filter tags
  return (profiles.filter((profile) => doesProfileMatchAllFilters(profile.tags, profile.industries, filterTags, filterIndustries))) //return the profiles that match the filter tags
}

function HomePage() {
  const { profiles, isLoading, error } = useProfiles();
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedIndustries, setSelectedIndustries] = useState([]);
  const filteredProfiles = filterProfiles(profiles, selectedTags, selectedIndustries)
  
  console.log("SelectedTags:",selectedTags);
  console.log("FilteredProfiles:", filteredProfiles);
  console.log("SelectedIndustries:", selectedIndustries);
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
            Tag Filter:
            <TagSelect setSelectedTags={setSelectedTags} />
            Industry Filter:
            <IndustrySelect setSelectedIndustries={setSelectedIndustries} />
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
