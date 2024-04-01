import UserCard from "../components/UserCard/UserCard";
import useUsers from "../hooks/use-users";
import deleteUser from "../api/delete-user";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useAuth from "../hooks/use-auth";

function UsersPage() {
    const navigate = useNavigate();
    const { auth } = useAuth();
    const { users, isLoading, error, setUsers } = useUsers();


    useEffect(() => {
        // Filter the users array to find the current user
        const currentUser = users.find(user => user.id === auth.user_id);
        // determine if current user is staff
        const isStaff = currentUser ? currentUser.is_staff: false;
        if (!isStaff) {
            window.alert("You do not have permission to access these records");
            navigate('/');
        }
    }, []);


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