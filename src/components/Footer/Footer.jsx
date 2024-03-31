import "../../components/Footer/Footer.css";
import { Link } from "react-router-dom";
import logo from "../../assets/NavBar/logo.png";
import { FaLinkedin, FaFacebook } from "react-icons/fa";


function Footer() {
  return (
    <>
      <footer className="bg-dark">
        <div className="footer-container">
          <div className="footer-logo-link">
            <Link to="/">
              <img
                  className="logo-footer"
                  src={logo}
                  alt="Image of DiversiTech's logo"
              />
            </Link>
          </div>
          <div className="footer-section">
            <ul className="footerItems">
              <li>
                <Link to="/termsandconditions">Terms and Conditions</Link>
              </li>
              <li>
                <Link to="/privacy">Privacy Policy</Link>
              </li>
            </ul>
          </div>
          <div className="socials">
            <ul>
              <li>
                <Link className="linkedin-icon" to="/signup"> <FaLinkedin size={24}/></Link>
              </li>
              <li>
                <Link className="facebook-icon" to="/login"> <FaFacebook size={24}/></Link>
              </li>
            </ul>
          </div>

        </div>
      </footer>
    </>
  );
}

export default Footer;
