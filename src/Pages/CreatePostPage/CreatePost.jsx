import { useForm } from "react-hook-form";
import { useState } from "react";
import { FaCloudUploadAlt, FaRegTrashAlt } from "react-icons/fa";
import Button from "../../Components/Button/Button";
import Cookies from "js-cookie";
import api from "../../api/api";
import { storage } from "../../services/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import "./CreatePost.css";

function CreatePost({ closeModal }) {
  //Hooks
  const [imageSelection, setImageSelection] = useState("Upload image");
  const [upload, setUpload] = useState(true);
  const form = useForm();
  const { register, control, handleSubmit, formState } = form;

  //Functions / methods

  const handleFormSubmit = (data) => {
    const date = new Date();
    const date_posted = date.toISOString().slice(0, 19).replace("T", " ");
    // .slice(0, 19).replace("T", " ");
    data.date_posted = date_posted;
    console.log((data.date_posted = date_posted));
    console.log(data);
    if (data.image !== undefined && data.image[0]) {
      const imageName = data.image[0];
      const imageRef = ref(storage, `${imageName.name + v4()}`);
      uploadBytes(imageRef, imageName).then(() => {
        getDownloadURL(imageRef).then((url) => {
          data.image = url;
          const userToken = Cookies.get("user_token");
          if (!userToken) {
            console.error("user token is missing");
          } else {
            const config = {
              headers: {
                Authorization: `Bearer ${userToken}`,
              },
            };
            api.post("/articles", data, config).then((res) => console.log(res));
          }
        });
      });
    }
    // const userToken = Cookies.get("user_token");
  };

  const handleImageSelection = (e) => {
    const tagInput = e.target;
    if (tagInput.files.length > 0) {
      setImageSelection(tagInput.files[0].name);
      setUpload(false);
    } else {
      setImageSelection("Upload image");
      setUpload(true);
    }
    // console.log(tagInput.files[0].name);
  };

  const handleDeleteImage = () => {
    const theFile = document.getElementById("image");
    theFile.value = null;
    setImageSelection("Upload image");
    setUpload(true);
  };

  return (
    <div className="create__post__container">
      <div className="main__post__body">
        <button className="exit" onClick={closeModal}>
          &times;
        </button>
        <h2 className="main__Text">Create a new Post</h2>
        <form onSubmit={handleSubmit(handleFormSubmit)} noValidate>
          <div className="titleAndCategory">
            <div className="titleDiv">
              <label htmlFor="title"></label>
              <input
                type="text"
                id="subject"
                placeholder="Title"
                {...register("subject", {
                  required: "Enter a title",
                })}
              />
            </div>
            <div className="selectDiv">
              <label htmlFor="category"></label>
              <select
                id="category"
                {...register("category", {
                  required: "Select one of the options",
                })}
                defaultValue="others"
              >
                <option value="">Select Category</option>
                <option value="Swat tactics">Swat tactics</option>
                <option value="Police Office">Police Office</option>
                <option value="Cyber Attacks">Cyber Attacks</option>
                <option value="New Recruits">New Recruits</option>
                <option value="Agriculture">Agriculture</option>
                <option value="Others">Others</option>
              </select>
            </div>
          </div>
          <div>
            <textarea
              cols="30"
              rows="10"
              placeholder="Create a post"
              className="text__area_input"
              {...register("content", { required: "Write a post" })}
            ></textarea>
          </div>
          <div className="wrapper">
            <div>
              <label htmlFor="image" className="labels">
                {imageSelection}
                {upload && <FaCloudUploadAlt />}
                {/* <FaCloudUploadAlt /> */}
              </label>
              <input
                type="file"
                id="image"
                className="filesInput"
                {...register("image", { required: "Add an image" })}
                onChange={handleImageSelection}
              />
            </div>
            {imageSelection !== "Upload image" && (
              <div className="trashImage" onClick={handleDeleteImage}>
                <FaRegTrashAlt /> Delete selected image
              </div>
            )}

            <div>
              <Button
                text="Post"
                NewclassName="btnTabLogsPost "
                type="Submit"
              />
            </div>
          </div>
        </form>
        {/* <DevTool control={control} /> */}
      </div>
    </div>
  );
}

export default CreatePost;
