import "../../components/ProfileCards/ProfileCards.css";
import { BsShare } from "react-icons/bs";

function ProfileCards() {
    return (

        <div className="profile--card-container">
            <div className="profile--card-header">
                <div className="profile-image">
                    <img src="https://via.placeholder.com/68" alt="Profile Placeholder"/>
                </div>

                <div>
                    <h4>Sahar, Kavousi</h4>
                    <p>Front End& UX</p>
                </div>
                <div className="profile--card-header-share">
                    <div className="profile-header-social-menu" >
                        {/*<img src="https://via.placeholder.com/35" alt="Profile Placeholder"/>*/}
                        <button>
                            <BsShare />
                        </button>

                    </div>
                </div>
            </div>

            <div className="profile--card-body">
                <p>Card Body...</p>
            </div>
            <div className="profile--card-footer">
                <div>
                    <p>Card Footer...</p>
                </div>
                <div>
                    <p>Card Footer...</p>
                </div>
            </div>

        </div>
    );
}

export default ProfileCards;
