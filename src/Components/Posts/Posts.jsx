import AvatarProfile from "../AvatarProfile/AvatarProfile";
import policeOfficer from "../../assets/popo.jpg";
import articleImage from "../../assets/swatPic.jpg";
import { SlOptionsVertical } from "react-icons/sl";
import { FaShare, FaRegComment } from "react-icons/fa";
import { AiTwotoneLike } from "react-icons/ai";
import { CiBookmark } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import AllUsersContext from "../../contexts/AllUsersContext";
import ArticleContext from "../../contexts/ArticleContext";
import "./Posts.css";

function Posts({
  fullNameAndRank,
  UserInstitution,
  postImage,
  postContent,
  avatar,
}) {
  const { totalUsers } = useContext(AllUsersContext);
  const { posts } = useContext(ArticleContext);

  // const[ postUser,setPostUser]=useState()
  // console.log(totalUsers);
  return (
    <div className="postContainer">
      <div className="imageAndName">
        {totalUsers.map((user, i) => {
          <Link to={`/profile/:${user.id}`} key={i}>
            <div className="postsProfile">
              <AvatarProfile avatar={avatar} />
              <div className="nameAndInstitution">
                <h5>{fullNameAndRank}</h5>
                <p>{UserInstitution}</p>
              </div>
            </div>
          </Link>;
        })}
        <SlOptionsVertical />
      </div>
      <div className="articleImages">
        <img src={postImage} alt="" />
      </div>
      <div className="articleText">
        <p>{postContent}</p>
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
