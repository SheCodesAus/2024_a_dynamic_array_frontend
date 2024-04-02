import React from "react";
import "../ProfileCards/SocialMediaShare.css";
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  FacebookMessengerShareButton,
  WhatsappShareButton,
  EmailIcon,
  FacebookIcon,
  LinkedinIcon,
  FacebookMessengerIcon,
  WhatsappIcon,
} from "react-share";
import { BsShare } from "react-icons/bs";

function SocialMediaShare({ dropdownOpen, toggleDropdown, profileId }) {
  const shareUrl = `https://main--diversitech.netlify.app/profile/${profileId}`;

  return (
    <div className="ss_wrap ss_wrap_1">
      <div className="ss_btn" onClick={toggleDropdown}>
        <span className="icon">
          <BsShare name="share-social"></BsShare>
        </span>
      </div>

      {dropdownOpen && (
        <div className={`dd_list ${dropdownOpen ? "open" : ""}`}>
          <ul>
            <li>
              <EmailShareButton url={shareUrl} quote={"Checkout this profile!"}>
                <EmailIcon size={30} round={true} />
              </EmailShareButton>
            </li>
            <li>
              <FacebookShareButton
                url={shareUrl}
                quote={"Checkout this profile!"}
              >
                <FacebookIcon size={30} round={true} />
              </FacebookShareButton>
            </li>
            <li>
              <LinkedinShareButton
                url={shareUrl}
                quote={"Checkout this profile!"}
              >
                <LinkedinIcon size={30} round={true} />
              </LinkedinShareButton>
            </li>
            <li>
              <FacebookMessengerShareButton
                url={shareUrl}
                quote={"Checkout this profile!"}
              >
                <FacebookMessengerIcon size={30} round={true} />
              </FacebookMessengerShareButton>
            </li>
            <li>
              <WhatsappShareButton
                url={shareUrl}
                quote={"Checkout this profile!"}
              >
                <WhatsappIcon size={30} round={true} />
              </WhatsappShareButton>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default SocialMediaShare;
