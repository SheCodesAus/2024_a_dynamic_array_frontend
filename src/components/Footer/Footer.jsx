import "../../components/Footer/Footer.css";
import { Link } from "react-router-dom";
import logo from "../../assets/NavBar/logo.png";

function Footer() {
  return (
    <>
      <section className="footer">
        <div className="footer-section">
          <div className="logo-link">
            <Link to="/">
              <img
                className="logo"
                src={logo}
                alt="Image of DiversiTech's logo"
              />
            </Link>
          </div>

          <div className="menu-items">
            <ul>
              <li>
                <Link to="/">Terms and Conditions</Link>
              </li>
              <li>
                <Link to="/about">Privacy Policy</Link>
              </li>
            </ul>
          </div>
          <div className="socials">
            <ul>
              <li>
                <Link to="/signup">instagram</Link>
              </li>
              <li>
                <Link to="/login">facebook</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
export default Footer;
