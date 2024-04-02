import wavebanner from "../../assets/wavebanner.png";
import group from "../../assets/Illustrations/group.png";
import "../HomePage/HomePage.css";
import "../Buttons/CtaButton.css";
import useAuth from "../../hooks/use-auth";
import useUser from "../../hooks/use-user";
import useProfiles from "../../hooks/use-profiles";
import { Link, Outlet } from "react-router-dom";


function Banner() {
  const { auth, setAuth } = useAuth();
  const userId = auth.user_id;
  const { profiles, setProfiles } = useProfiles();

  const userProfile = profiles.filter(profile => profile.owner === userId);
  const hasProfile = userProfile.length > 0;


  return (
    <>
      <section className="banner">
        {/* <img
          className="wave"
          src={wavebanner}
          alt="background banner image orange wavy lines in the background"
        ></img> */}
        <div className="header">
          <div className="header-text">
            <p className="header-headline">Empowering diversity. Uniting tech visionaries.</p>
            <p className="header-subheadline">We're dedicated to shattering stereotypes and fostering diversity in the tech industry.</p>
            {!auth.token && (
              <Link to="/signup"><button className="cta-button-banner">Sign Up</button></Link>
            )}
            {(!hasProfile && auth.token || !auth.token) && (
            <Link to="create-profile"><button className="cta-button-banner">Become a Mentor</button></Link>
            )}
          </div>
          <div className="header-img">
            <img className="group-img" src={group}></img>
          </div>
        </div>
      </section>
    </>
  );
}
export default Banner;
