import wavebanner from "../../assets/wavebanner.png";
import group from "../../assets/Illustrations/group.png";
import "../HomePage/HomePage.css";
import "../Buttons/CtaButton.css";

function Banner() {
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
            <p className="header-headline">Headline Text Goes Here</p>
            <p className="header-subheadline">Another line of text goes here</p>
            <button className="cta-button-banner">CTA Button</button>
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
