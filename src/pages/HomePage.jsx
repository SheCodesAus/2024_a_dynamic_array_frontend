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

//---------FILTERING PROFILE CARD LOGIC----------------

    //function to check if the profile tags match the filter tags
    function doesProfileMatchTags(profileTags, filterTags) { 
      //return true if all the filter tags are included in the profile tags
      return filterTags.every((filterTag) => profileTags.includes(filterTag))
    }
    //function to check if the profile Industries match the filter Industries
    function doesProfileMatchIndustries(profileIndustries, filterIndustries) {
      //return true if all the filter Industries are included in the profile industries 
      return filterIndustries.every((filterIndustry) => profileIndustries.includes(filterIndustry))
    }
    //function to check if the profile information matches the filter tags and filter Industries
    function doesProfileMatchAllFilters(profileTags, filterTags, profileIndustries, filterIndustries) {
      //return true if the profile matches all the filters
      return doesProfileMatchTags(profileTags, filterTags) && doesProfileMatchIndustries(profileIndustries, filterIndustries) 
    }

    //function to filter the profiles based on the filters
    function filterProfiles(profiles, filterTags, filterIndustries) { 
      //return the profiles that match the filter tags
      return (profiles.filter((profile) => doesProfileMatchAllFilters(profile.tags, profile.industries, filterTags, filterIndustries)))
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
