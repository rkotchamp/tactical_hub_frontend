import AvatarProfile from "../AvatarProfile/AvatarProfile";
import policeOfficer from "../../assets/popo.jpg";
import articleImage from "../../assets/swatPic.jpg";
import "./Posts.css";

function Posts() {
  return (
    <div className="postContainer">
      <div className="imageAndName">
        <AvatarProfile avatar={policeOfficer} />
        <h5>Sgt. George Sam</h5>
      </div>
      <div className="articleImages">
        <img src={articleImage} alt="" />
      </div>
    </div>
  );
}

export default Posts;
