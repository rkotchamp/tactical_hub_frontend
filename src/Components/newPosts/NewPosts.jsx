import AvatarProfile from "../AvatarProfile/AvatarProfile";
import avatar from "../../assets/profile.jpg";
import "./NewPosts.css";

function NewPosts({ openModalUp }) {
  return (
    <div className="newPostContainer">
      <AvatarProfile avatar={avatar} />
      <form action="">
        <textarea
          type="text"
          placeholder="Create a Post"
          className="PostInput"
          onClick={openModalUp}
        />
      </form>
      <div className="textContent"></div>
    </div>
  );
}

export default NewPosts;
