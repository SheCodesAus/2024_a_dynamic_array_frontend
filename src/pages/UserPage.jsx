import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useUser from "../hooks/use-user";
import { useParams } from "react-router-dom";
import UserDetails from "../components/UserCard/UserDetails";
import EditUserForm from "../components/Forms/EditUserForm";
import { Link } from "react-router-dom";



function userPage() {
    const { userId } = useParams();
    const { user, setUser, isLoading, error} = useUser(userId);
    const [isEditing, setIsEditing] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (error) {
            window.alert(error.message);
            navigate("/");
        }
    }, [error, navigate]);

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


    return (
        <div className="userdetails-main-container">
            {user && !isEditing && (
                <div>
                    <UserDetails user={user} />
                    <button onClick={handleEditClick}>Edit</button>
                    <Link to='/update-password' className="button-link">Update Password</Link>
                </div>
            )}
            {isEditing && (
                <EditUserForm user={user} onSave={handleSave}/>
            )}
        </div>
    )
};

export default userPage;