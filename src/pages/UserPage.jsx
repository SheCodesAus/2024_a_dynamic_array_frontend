import { useState } from "react";
import useUser from "../hooks/use-user";
import { useParams } from "react-router-dom";
import UserDetails from "../components/UserCard/UserDetails";
import EditUserForm from "../components/Forms/EditUserForm";



function userPage() {
    const { userId } = useParams();
    const { user, setUser, isLoading, error} = useUser(userId);
    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSave = (updatedUser) => {
        setUser(updatedUser);
        setIsEditing(false);
    };

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error.message}</p>;
    }

    return (
        <div className="userdetails-main-container">
            {user && !isEditing && (
                <div>
                    <UserDetails user={user} />
                    <button onClick={handleEditClick}>Edit</button>
                </div>
            )}
            {isEditing && (
                <EditUserForm user={user} onSave={handleSave}/>
            )}
        </div>
    )
};

export default userPage;