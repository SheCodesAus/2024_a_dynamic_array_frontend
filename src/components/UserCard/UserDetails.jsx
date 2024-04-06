import "../UserCard/UserDetails.css";

function UserDetails(props) {
  const { user } = props;

  return (
    <section className="user-detail-body-container">
      <div className="user-card-container">
        <h2 className="user-details-title">User Details</h2>
        <ul className="user-details-list">
          <li>
            <strong>Username:</strong> {user.username}
          </li>
          <li>
            <strong>Email:</strong> {user.email}
          </li>
          <li>
            <strong>First Name:</strong> {user.first_name}
          </li>
          <li>
            <strong>Last Name:</strong> {user.last_name}
          </li>
        </ul>
      </div>
    </section>
  );
}

export default UserDetails;
