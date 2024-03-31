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
                <p>Redirecting to home page...</p>
                {setTimeout(() => {
                navigate('/');
                }, 10000)}
            </div>
        );
    }

    const handleDeleteUser = async (userId) => {
        try {
            await deleteUser(userId);
            const updatedUsers = users.filter(user => user.id !== userId);
            setUsers(updatedUsers);
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

 
    return (
        <div className="user-list">
            {users.map((userData, key) => {
                return <UserCard key={key} userData={userData} onDelete={() => handleDeleteUser(userData.id)} />;
            })}
        </div>
    );
};

export default UsersPage;