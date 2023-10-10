import NavBar from "../../Components/NavBar/NavBar";
import { useState } from "react";
import ChangePassword from "../../Components/editComponent/changePassWord/ChangePassword";
import EditProfileCompo from "../../Components/editComponent/EditProfile/editProfileCompo";
import "./EditPage.css";

function EditProfile() {
  const [btnEdit, setBtnEdit] = useState(true);
  const [btnPassword, setBtnPassword] = useState(false);

  const handleEditProfile = () => {
    setBtnEdit(true);
    setBtnPassword(false);
  };
  const handleChangePassword = () => {
    setBtnEdit(false);
    setBtnPassword(true);
  };
  return (
    <div className="editPageContainer">
      <NavBar />
      <div className="edit__contents">
        <div className="edit__toggle_button__container">
          <button
            className={`${btnEdit ? "editBtn btnActive " : "editBtn"}`}
            onClick={handleEditProfile}
          >
            Edit Profile
          </button>
          <button
            className={`${btnPassword ? "editBtn btnActive " : "editBtn"}`}
            onClick={handleChangePassword}
          >
            Change Password
          </button>
        </div>

        {btnEdit && (
          <div className="edit__Profile__content">
            <EditProfileCompo />
          </div>
        )}
        {btnPassword && (
          <div className="change__password__content">
            <ChangePassword />
          </div>
        )}
      </div>
    </div>
  );
}

export default EditProfile;
