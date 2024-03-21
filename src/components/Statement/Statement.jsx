import { Outlet } from "react-router-dom";
import "../../components/Statement/Statement.css";

function Statement() {
  return (
    <>
      <section className="statement">
        <h1 className="statement-head-one">
          A great statement describing DiversiTech will go here!
        </h1>
        <p className="statement-head-two">
          Some really wonderful words will go here
        </p>
        <p className="statement-head-three">
          some more great words will go here
        </p>
      </section>
      <Outlet />
    </>
  );
}
export default Statement;
