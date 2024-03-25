import CreateProfileForm from "../components/Forms/CreateProfileForm.jsx";

import "../components/Forms/CreateProfile.css";

function CreateProfilePage() {
  return (
    <>
      <section className="create-profile-container">
        <div className="create-profile-form">
          <CreateProfileForm />
        </div>
      </section>
    </>
  );
}
export default CreateProfilePage;
