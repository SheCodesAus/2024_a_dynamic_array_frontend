import { Outlet } from "react-router-dom";
import "../../components/Statement/Statement.css";

function Statement() {
  return (
    <>
      <section className="statement">
        <h1 className="statement-head-one mb-1">
        Welcome to our inclusive platform!
        </h1>
        <p className="statement-head-two">
        This is a place where women and individuals who may not fit the stereotypical tech mold can thrive, mentor, connect, and inspire!
        </p>
        <p className="statement-head-two">
        Whether you're seeking guidance on entering the tech industry or eager to offer support on someone's journey into tech,
        this is the place to connect, mentor, and make a difference.
        </p>
        <p className="statement-head-three mb-1">
        Explore our diverse range of mentor profiles spanning various industries and skill sets,
        and find the perfect match to guide your tech journey...
        </p>
      </section>
      <Outlet />
    </>
  );
}
export default Statement;
