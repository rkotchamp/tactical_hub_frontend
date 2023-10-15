import AvatarProfile from "../AvatarProfile/AvatarProfile";
import policeOfficer from "../../assets/popo.jpg";
import articleImage from "../../assets/swatPic.jpg";
import { SlOptionsVertical } from "react-icons/sl";
import { FaShare, FaRegComment } from "react-icons/fa";
import { AiTwotoneLike } from "react-icons/ai";
import { CiBookmark } from "react-icons/ci";
import { Link } from "react-router-dom";
import "./Posts.css";

function Posts() {
  return (
    <div className="postContainer">
      <div className="imageAndName">
        <Link to="/profile">
          <div className="postsProfile">
            <AvatarProfile avatar={policeOfficer} />
            <div className="nameAndInstitution">
              <h5>Sgt. George Sam</h5>
              <p>German Air Force</p>
            </div>
          </div>
        </Link>
        <SlOptionsVertical />
      </div>
      <div className="articleImages">
        <img src={articleImage} alt="" />
      </div>
      <div className="articleText">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed et
          perspiciatis suscipit cupiditate vel explicabo voluptatibus. Optio
          praesentium nemo architecto iste quia modi sed provident molestias
          quae, laudantium alias maiores, nobis, temporibus cupiditate? Ex
          dolore ipsa vero minus, quod nam maiores id voluptates, assumenda
          ducimus asperiores voluptatum impedit, perferendis maxime?
        </p>
        <div className="interactions">
          <div className="socialInteractions">
            <AiTwotoneLike />
            <FaRegComment />
            <FaShare />
          </div>
          <CiBookmark />
        </div>
      </div>
    </div>
  );
}

export default Posts;
