import AvatarProfile from "../AvatarProfile/AvatarProfile";
import { useContext } from "react";
import UserContext from "../../contexts/userContext";
import "./NewPosts.css";

function NewPosts({ openModalUp }) {
  const { user } = useContext(UserContext);
  return (
    <div className="newPostContainer">
      <AvatarProfile avatar={user ? user?.profile_image : null} />
      <form action="">
        <textarea
          type="text"
          placeholder="Create a Post"
          className="PostInput"
          onClick={openModalUp}
        />
      </form>
      {/* <div className="textContent"></div> */}
    </div>
  );
}

export default NewPosts;
