import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useUser from "../hooks/use-user";
import UserDetails from "../components/UserCard/UserDetails";
import EditUserForm from "../components/Forms/EditUserForm";
import { Link } from "react-router-dom";
import deleteUser from "../api/delete-user";
import useAuth from "../hooks/use-auth";
import ModalDeleteConfirmation from "../components/Modal/ModalDeleteConfirmation";
import "../pages/UserPage.css";

function userPage() {
  const { userId } = useParams();
  const { user, isLoading, error, setUser } = useUser(userId);
  const [isEditing, setIsEditing] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const navigate = useNavigate();
  const { auth, setAuth } = useAuth();

  console.log(userId);
  console.log(user);

  useEffect(() => {
    if (error) {
      window.alert(error.message);
      navigate("/");
    }
  }, [error, navigate]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleDeleteClick = () => {
    setShowConfirmation(true);
  };

  const handleConfirmDelete = async () => {
    try {
      await deleteUser(userId);
      window.localStorage.removeItem("token");
      window.localStorage.removeItem("user_id");
      window.localStorage.removeItem("is_staff");
      setAuth({ token: null, user_id: null, is_staff: null });
      window.alert("Your account has been deleted.");
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleCancelDelete = () => {
    setShowConfirmation(false);
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
          <div className="user-button-container">
            <button className="user-buttton" onClick={handleEditClick}>
              Edit
            </button>
            <button className="user-button" onClick={handleDeleteClick}>
              Delete
            </button>
            <button className="user-button change-password-btn">
              <Link to="/update-password">Update Password</Link>
            </button>
          </div>
        </div>
      )}
      {isEditing && <EditUserForm user={user} onSave={handleSave} />}
      {showConfirmation && (
        <ModalDeleteConfirmation
          onConfirm={handleConfirmDelete}
          onCancel={handleCancelDelete}
          showModal={showConfirmation}
        />
      )}
    </div>
  );
}

export default userPage;
