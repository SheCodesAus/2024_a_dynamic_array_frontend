import { Outlet } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import HomePageBanner from "../components/HomePage/HomePageBanner.jsx";
import "../index.css";
import "../components/HomePage/HomePage.css";
import Statement from "../components/Statement/Statement.jsx";
import ProfileCards from "../components/ProfileCards/ProfileCards.jsx";
import useProfiles from "../hooks/use-profiles.js";
import TagSelect from "../components/Forms/SelectOptions/TagsMultiselectDropdown.jsx";
import IndustrySelect from "../components/Forms/SelectOptions/IndustriesMultiselectDropdown.jsx";
import LocationDropdowns from "../components/Forms/SelectOptions/LocationDropdowns.jsx";
import ToggleSwitch from "../components/Forms/ToggleSwitch/ToggleSwitch.jsx";

//---------FILTERING PROFILE CARD LOGIC----------------

//function to check if the multiselects (tags and industries) on profile match the same multiselects as the filters
function doesProfileMatchMultiSelect(profileMultiSelect, filterMultiSelect) {
  //return true if all the multiselects that are selected in the filter are included in the profile array that we expect to return
  return filterMultiSelect.every((filterMultiSelect) => 
    profileMultiSelect.includes(filterMultiSelect)
  );
}


function doesProfileMatchSingleSelect(profileSingleSelect, filterSingleSelect) {
  //return true if the profile matches the filter
  return profileSingleSelect === filterSingleSelect;
}

//function to filter the profiles based on the filters
function filterProfiles(
  profiles, 
  filterTags, 
  filterIndustries,
  filterIsOpenToMentor,
  filterIsSeekingMentorship,
  filterCountryIso2, 
  filterStateIso2, 
  filterArea
  ) {
    if (filterTags.length === 0 && 
        filterIndustries.length === 0 && 
        filterIsOpenToMentor === false &&
        filterIsSeekingMentorship === false &&
        filterCountryIso2 === "" &&
        filterStateIso2 === "" &&
        filterArea === ""
        ) {
      return profiles;
    }
  
    return profiles.filter((profile) => {
      // true if the profile matches all the filters
      return doesProfileMatchMultiSelect(profile.tags, filterTags) &&
      doesProfileMatchMultiSelect(profile.industries, filterIndustries) &&
      (!filterIsOpenToMentor || doesProfileMatchSingleSelect(profile.is_open_to_mentor, filterIsOpenToMentor)) &&
      (!filterIsSeekingMentorship || doesProfileMatchSingleSelect(profile.is_seeking_mentorship, filterIsSeekingMentorship)) &&
      (!filterCountryIso2 || doesProfileMatchSingleSelect(profile.country, filterCountryIso2)) &&
      (!filterStateIso2 || doesProfileMatchSingleSelect(profile.state, filterStateIso2)) &&
      (!filterArea || doesProfileMatchSingleSelect(Number(profile.area), filterArea))
   });
}

function HomePage() {
  const { profiles, isLoading, error } = useProfiles();
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedIndustries, setSelectedIndustries] = useState([]);

  
  // State variables to hold selected country, state, and city id values
  const [stateIso2, setStateIso2] = useState("");
  const [countryIso2, setCountryIso2] = useState("");
  const [area, setSelectedCityId] = useState("");
  // const multiSelectRef = useRef(null); // creating a reference to the multiselect component
  const [toggles, setToggles] = useState({
    is_open_to_mentor: false,
    is_seeking_mentorship: false
  });
  
  // change handler for the toggle switch
  const handleChange = (event) => {
    const { id, value } = event.target;
    setToggles((prevToggles) => ({
      ...prevToggles,
      [id]: value,
    }));
  };

  const isOpenToMentorToggle = toggles.is_open_to_mentor;
  const isSeekingMentorshipToggle = toggles.is_seeking_mentorship;

  const filteredProfiles = filterProfiles(
    profiles,
    selectedTags,
    selectedIndustries,
    isOpenToMentorToggle,
    isSeekingMentorshipToggle,
    countryIso2,
    stateIso2,
    area
  );

  return (
    <div className="main-container">
      <HomePageBanner />
      <Statement />
      <section className="home-container">
        {/*<div className="filter-results hideItem">*/}
        {/*  <p>Filters: </p>*/}
        {/*  {selectedTags.map((tag) => (*/}
        {/*    <span key={tag}>{tag}</span>*/}
        {/*  ))}*/}
        {/*  {selectedIndustries.map((industry) => (*/}
        {/*    <span key={industry}>{industry}</span>*/}
        {/*  ))}*/}
        {/*</div>*/}
        <div className="home-body-container">
          <div className="filter-container">

            Tag Filter:
            <TagSelect 
              name="tag" 
              margin={'0 0 1.5rem'} 
              setSelectedTags={setSelectedTags}/>

            Industry Filter:
            <IndustrySelect
                name="industry"
                setSelectedIndustries={setSelectedIndustries}
            />
            <LocationDropdowns
                countryIso2={countryIso2}
                stateIso2={stateIso2}
                setStateIso2={setStateIso2}
                setSelectedCityId={setSelectedCityId}
                setCountryIso2={setCountryIso2}
                name="location"
                // onChange={handleChange}
            />
            <div className="home-page-switch-container mt-2 mb-2">
              <p className="toggle">Open to Mentoring</p>
              <ToggleSwitch
                onChange={handleChange}
                Name="is_open_to_mentor"/>
            </div>
            <div className="home-page-switch-container mb-2">
              <p className="toggle">Seeking Mentorship</p>
              <ToggleSwitch
                onChange={handleChange}
                Name="is_seeking_mentorship"/>
            </div>
          </div>
          <div className="profile-card-container">
            {isLoading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>
                  OOps, sorry we are having some trouble retrieving this
                  information!
                </p>
            ) : 
              filteredProfiles.length > 0 ? (
                <ProfileCards profiles={filteredProfiles}/>
            ):(
              <p>
                Sorry, there are no profiles matching your selected filters
              </p>
            )}
          </div>
        </div>
      </section>

      <Outlet />
    </div>
  );
}
export default HomePage;
