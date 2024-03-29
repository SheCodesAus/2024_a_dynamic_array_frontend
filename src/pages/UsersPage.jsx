import UserCard from "../components/UserCard/UserCard";
import useUsers from "../hooks/use-users";
import deleteUser from "../api/delete-user";
import { useNavigate } from "react-router-dom";

function UsersPage() {
    const navigate = useNavigate();
    const { users, isLoading, error, setUsers } = useUsers();

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return (
            <div className="error-container">
                <p>{error.message}</p>
                <p>Redirecting to home page...</p>
                {setTimeout(() => {
                navigate('/');
                }, 5000)}
            </div>
        );
    }

    const handleDeleteUser = async (username) => {
        try {
            await deleteUser(username);
            const updatedUsers = users.filter(user => user.username !== username);
            setUsers(updatedUsers);
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

 
    return (
        <div className="user-list">
            {users.map((userData, key) => {
                return <UserCard key={key} userData={userData} onDelete={() => handleDeleteUser(userData.username)} />;
            })}
        </div>
    );
};

export default UsersPage;