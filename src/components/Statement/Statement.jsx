import { Outlet } from "react-router-dom";

function Statement() {
  return (
    <>
      <section className="statement">
        <h1> A great statement describing DiversiTech will go here!</h1>
      </section>
      <Outlet />
    </>
  );
}
export default Statement;
