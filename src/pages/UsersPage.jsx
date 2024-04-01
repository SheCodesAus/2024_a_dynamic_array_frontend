import UserCard from "../components/UserCard/UserCard";
import useUsers from "../hooks/use-users";
import deleteUser from "../api/delete-user";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function UsersPage() {
    const navigate = useNavigate();
    // const { auth } = useAuth();
    const { users, isLoading, error, setUsers } = useUsers();
    const isStaffString = localStorage.getItem('is_staff');
    const isStaff = isStaffString === 'true';
    console.log(isStaff);

    useEffect(() => {
        if(!isStaff) {
            window.alert("You do not have permission to view these records");
            navigate("/");
        }
    }, []);


    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
            window.alert(error.message);
            {setTimeout(() => {
                navigate('/');
                }, 10000)}
    }

    const handleDeleteUser = async (userId) => {
        try {
            await deleteUser(userId);
            const updatedUsers = users.filter(user => user.id !== userId);
            setUsers(updatedUsers);
            alert("User successfully deleted");
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