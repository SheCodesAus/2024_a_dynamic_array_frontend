import "../../components/UserCard/UserCard.css";
import { Link } from "react-router-dom";

function UserCard(props) {
    const { userData } = props;
    const userLink = `users/${userData.username}`;

    return (
        <section className="user-card-body-container">
            <div className="user--card-container">
                <Link to={userLink}>
                    <h5>{userData.username}</h5>
                </Link>
                <p>{userData.email}</p>
                <button>Delete</button>
            </div>
        </section>
    );
}

export default UserCard;

