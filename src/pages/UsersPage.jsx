import UserCard from "../components/UserCard/UserCard";
import useUsers from "../hooks/use-users";
import deleteUser from "../api/delete-user";

function UsersPage() {
    const { users, isLoading, error, setUsers } = useUsers();

    const handleDeleteUser = async (username) => {
        try {
            await deleteUser(username);
            const updatedUsers = users.filter(user => user.username !== username);
            console.log("updated users", updatedUsers);
            setUsers(updatedUsers);
        } catch (error) {
        console.error('Error deleting user:', error);
        }
    };

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error.message}</p>;
    }

    return (
        <div className="user-list">
            {users.map((userData, key) => {
                return <UserCard key={key} userData={userData} onDelete={() => handleDeleteUser(userData.username)} />;
            })}
        </div>
    );
}

export default UsersPage;