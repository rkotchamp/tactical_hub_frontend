import { useForm } from "react-hook-form";
import Button from "../../Button/Button";
import { FaCloudUploadAlt, FaRegTrashAlt } from "react-icons/fa";
import { useState } from "react";

import "./editProfileCompo.css";

function EditProfileCompo() {
  //Hooks
  const [imageSelected, setImageSelected] = useState("Upload an Image");
  const [uploadIcon, setUploadIcon] = useState(true);
  //   const [deleteUpload, setDeleteUpload] = useState(false);
  const form = useForm();
  const { register, handleSubmit } = form;

  //Methods

  const handleForm = (data) => {
    console.log(data);
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
      <form onSubmit={handleSubmit(handleForm)} className="formInput">
        <div>
          <input
            type="text"
            placeholder="Aaron"
            className="inputFields"
            {...register("first_name")}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Tacker"
            className="inputFields"
            {...register("last_name")}
          />
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
