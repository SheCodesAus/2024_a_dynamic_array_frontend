import { Link, Outlet } from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav className="navbar">
        <Link to="/">This is the NAVBAR area. this link goes to homepage</Link>
      </nav>
      <Outlet />
    </>
  );
}
export default NavBar;
