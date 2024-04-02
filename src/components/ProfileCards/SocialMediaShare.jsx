import React from "react";
import "../ProfileCards/SocialMediaShare.css";
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  FacebookMessengerShareButton,
  WhatsappShareButton,
  EmailIcon,
} from "react-share";
import { BsShare } from "react-icons/bs";

function SocialMediaShare({ dropdownOpen, toggleDropdown, profileId }) {
  const shareUrl = `https://main--diversitech.netlify.app/${profileId}`;

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
                <EmailIcon size={32} round={true} />
              </EmailShareButton>
            </li>
            <li>
              <FacebookShareButton
                url={shareUrl}
                quote={"Checkout this profile!"}
              ></FacebookShareButton>
            </li>
            <li>
              <LinkedinShareButton
                url={shareUrl}
                quote={"Checkout this profile!"}
              ></LinkedinShareButton>
            </li>
            <li>
              <FacebookMessengerShareButton
                url={shareUrl}
                quote={"Checkout this profile!"}
              ></FacebookMessengerShareButton>
            </li>
            <li>
              <WhatsappShareButton
                url={shareUrl}
                quote={"Checkout this profile!"}
              ></WhatsappShareButton>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default SocialMediaShare;
