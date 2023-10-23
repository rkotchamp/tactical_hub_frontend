import { useForm } from "react-hook-form";
import Button from "../../Button/Button";
import { FaCloudUploadAlt, FaRegTrashAlt } from "react-icons/fa";
import { useContext, useState } from "react";
import { storage } from "../../../services/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import UserContext from "../../../contexts/userContext";
import api from "../../../api/api";
import { useNavigate } from "react-router-dom";

import "./editProfileCompo.css";

function EditProfileCompo() {
  //Hooks
  const [imageSelected, setImageSelected] = useState("Upload an Image");
  const [uploadIcon, setUploadIcon] = useState(true);
  const [imageUpload, setImageUpload] = useState(null);

  const navigate = useNavigate();
  //   const [deleteUpload, setDeleteUpload] = useState(false);
  const form = useForm();
  const { register, handleSubmit } = form;

  const { user, setUser } = useContext(UserContext);

  //Methods

  const handleImageUpload = (data) => {
    console.log(data);
    if (data.first_name === "") {
      delete data.first_name;
    }
    if (data.last_name === "") {
      delete data.last_name;
    }
    if (data.bio === "") {
      delete data.last_name;
    }
    if (data.profile_image.length == 0) {
      delete data.profile_image;
    }

    if (Object.keys(data).length > 0) {
      if (data.profile_image !== undefined && data.profile_image[0]) {
        const imageName = data.profile_image[0];
        const imageRef = ref(storage, `${imageName.name + v4()}`);
        uploadBytes(imageRef, imageName).then(() => {
          getDownloadURL(imageRef)
            .then((url) => {
              data.profile_image = url;
              localStorage.setItem("profile_image", url);

              api
                .put(`/users/edit-profile/${user.id}`, data)
                .then(() => {
                  setUser({ ...user, ...data });
                  navigate("/profile");
                })
                .catch((err) => console.error(err));
            })
            .catch((err) => console.error(err));
        });
      }
    }
  };

  const handleImageSelected = (e) => {
    const fileInput = e.target;
    if (fileInput.files.length > 0) {
      setImageSelected(fileInput.files[0].name);
      setUploadIcon(false);
      //   setDeleteUpload(true);
    } else {
      setImageSelected("Upload an Image");
      setUploadIcon(true);
      //   setDeleteUpload(false);
    }
  };

  const handleDeleteImage = () => {
    const fileInput = document.getElementById("file");
    fileInput.value = null;
    setImageSelected("Upload an Image");
    setUploadIcon(true);
    // console.log(fileInput);
  };

  return (
    <div className="edit__form_input_container">
      <form onSubmit={handleSubmit(handleImageUpload)} className="formInput">
        <div>
          <input
            type="text"
            placeholder={user?.first_name}
            className="inputFields"
            {...register("first_name")}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder={user?.last_name}
            className="inputFields"
            {...register("last_name")}
          />
        </div>
        <div>
          <textarea
            cols="30"
            rows="10"
            placeholder={user.bio ? user?.bio : "Bio"}
            className="inputField"
            {...register("bio")}
          ></textarea>
        </div>
        <div>
          <label htmlFor="file" className="label">
            {imageSelected}

            {uploadIcon && <FaCloudUploadAlt />}
            {/* {deleteUpload && <FaRegTrashAlt onClick={handleDeleteImage} />} */}
          </label>
          <input
            type="file"
            placeholder="Upload a new profile picture"
            {...register("profile_image")}
            id="file"
            className="file"
            onChange={handleImageSelected}
          />
        </div>
        {imageSelected !== "Upload an Image" && (
          <div className="bin" onClick={handleDeleteImage}>
            {" "}
            <FaRegTrashAlt />
            Delete selected image
          </div>
        )}
        <div>
          <Button text="Submit" type="submit" NewclassName="btnTabLogs btns" />
        </div>
      </form>
    </div>
  );
}

export default EditProfileCompo;
