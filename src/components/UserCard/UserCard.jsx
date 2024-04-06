import "../../components/UserCard/UserCard.css";
import { Link } from "react-router-dom";

function UserCard(props) {
  const { userData, onDelete } = props;
  const userLink = `${userData.id}`;

  return (
    <section className="user-card-body-container">
      <div className="user--card-container">
        <Link to={userLink}>
          <h5>{userData.username}</h5>
        </Link>
        <p>{userData.email}</p>
        <button onClick={onDelete}>Delete</button>
      </div>
    </section>
  );
}

export default UserCard;
