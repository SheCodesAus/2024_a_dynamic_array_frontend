import "../../components/Footer/Footer.css";
import { Link } from "react-router-dom";
import logo from "../../assets/NavBar/logo.png";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="logo-link">
          <Link to="/">
            <img
              className="logo"
              src={logo}
              alt="Image of DiversiTech's logo"
            />
          </Link>
        </div>
        <div className="footer-section">
          <ul className="footerItems">
            <li>
              <Link to="/termsandconditions">Ts & Cs</Link>
            </li>
            <li>
              <Link to="/privacy">Privacy</Link>
            </li>
          </ul>
        </div>
        <div className="socials">
          <ul>
            <li>
              <Link to="/signup">I</Link>
            </li>
            <li>
              <Link to="/login">FB</Link>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
export default Footer;
