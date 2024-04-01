import "../components/About/AboutPage.css";
import name from "../assets/NavBar/name.png";
import aboutimg from "../assets/Illustrations/aboutUs.svg"
function AboutPage() {
  return (
    <>
      <section className="main-container about-container">
        <div className="about-header-text">
          <h1> DIVERSITECH</h1>
          <p>
            We're reshaping tech norms by empowering diversity and fostering
            inclusivity in the industry.
          </p>
          <p>
            Through mentorship and showcasing talent, we pave the way for a more
            equitable future.
          </p>
        </div>
        <div className="about-illustration">
          <img
            src={aboutimg}
            alt="Diversitech's logo and slogan Tech for all by all"
          />
        </div>
      <div className="about-story">
        <h2> Empowering Diversity!</h2>
        <p>
          Our mission is to shatter stereotypes and break down barriers in the
          tech industry by showcasing the diverse and talented individuals who
          make up our community.
          <p>
            We believe that everyone, regardless of gender identity, gender
            expression, race, religion, or sexuality, deserves equal
            opportunities in the world of technology. Our website serves as a
            platform for women and non-binary individuals to create profiles,
            mentor and be mentored, connect, and inspire the next generation of
            tech enthusiasts.{" "}
          </p>
          <p>
            By amplifying their voices and highlighting their achievements, we
            aim to empower young people to envision themselves as successful
            software engineers and leaders in the field. Together, we are
            rewriting the narrative of who belongs in tech and paving the way
            for a more inclusive and equitable future.
          </p>
        </p>
      </div>
      </section>
    </>
  );
}
export default AboutPage;
