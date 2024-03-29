import UserCard from "../components/UserCard/UserCard";
import useUsers from "../hooks/use-users";

function UsersPage() {
    const { users, isLoading, error } = useUsers();

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error.message}</p>;
    }

    return (
        <div className="user-list">
            {users.map((userData, key) => {
                return <UserCard key={key} userData={userData} />;
            })}
        </div>
    );
}

export default UsersPage;