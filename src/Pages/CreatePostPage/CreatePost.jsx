import { useForm } from "react-hook-form";
import { FaCloudUploadAlt, FaRegTrashAlt } from "react-icons/fa";
import Button from "../../Components/Button/Button";

import { Link } from "react-router-dom";
import "./CreatePost.css";

function CreatePost({ closeModal }) {
  //   const [register] = useForm();
  return (
    <div className="create__post__container">
      <div className="main__post__body">
        <button className="exit" onClick={closeModal}>
          &times;
        </button>
        <h2 className="main__Text">Create a new Post</h2>
        <form action="">
          <div>
            <label htmlFor="subjects">Subject</label>
            <select name="" id="subjects">
              <option value="">Select Subject</option>
              <option value="">Swat tactics</option>
              <option value="">Police Office</option>
              <option value="">Cyber Attacks</option>
              <option value="">New Recruits</option>
              <option value="">Agriculture</option>
              <option value="">Others</option>
            </select>
          </div>
          <div>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Create a post"
              className="text__area_input"
            ></textarea>
          </div>
          <div className="wrapper">
            <div>
              <label htmlFor="image" className="labels">
                <FaCloudUploadAlt />
              </label>
              <input type="file" id="image" className="filesInput" />
            </div>
            <div>
              <Button
                text="Post"
                NewclassName="btnTabLogsPost "
                type="Submit"
              />
            </div>
          </div>
        </form>
        {/* <div>
          <Button
            text="Cancel"
            NewclassName="btnCancelPost"
            onClick={closeModal}
          />
        </div> */}
      </div>
    </div>
  );
}

export default CreatePost;
