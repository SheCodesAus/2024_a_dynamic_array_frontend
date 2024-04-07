import "../../components/Footer/Footer.css";
import { Link } from "react-router-dom";
import logo from "../../assets/NavBar/logo.png";
import ModalTerms from "../Modal/ModalTerms";
import ModalPrivacy from "../Modal/ModalPrivacy";
import { FaLinkedin, FaFacebook } from "react-icons/fa";


function Footer() {
  return (
    <>
      <footer className="bg-dark fix-footer">
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
                <ModalTerms />
              </li>
              <li>
                <ModalPrivacy />
              </li>
            </ul>
          </div>
          <div className="footer-socials">
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
