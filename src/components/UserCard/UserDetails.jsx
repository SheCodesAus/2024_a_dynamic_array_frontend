
function UserDetails(props) {
    const { user } = props;

    return (
        <section className="user-detail-body-container">
            <div className="user-card-container">
                <h2>User Details</h2>
                <ul>
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
    )
};

export default UserDetails;