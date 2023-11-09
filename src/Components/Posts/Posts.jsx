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
import UserContext from "../../contexts/userContext";
import "./Posts.css";

function Posts() {
  const { totalUsers } = useContext(AllUsersContext);
  const { posts } = useContext(ArticleContext);
  const { user } = useContext(UserContext);
  // console.log(totalUsers);

  // const[ postUser,setPostUser]=useState()
  // console.log(totalUsers);
  return (
    <>
      {posts &&
        posts
          .slice()
          .reverse()
          .map((post, index) => {
            const users = totalUsers.find((u) => u.id === post.user_id);
            return (
              <div className="postContainer" key={post.id}>
                <div className="imageAndName">
                  <Link
                    to={
                      user.id === users.id ? "/profile" : `/profile/${users.id}`
                    }
                    key={users.id}
                  >
                    <div className="postsProfile">
                      <AvatarProfile
                        avatar={`${
                          users.profile_image ? users.profile_image : avatar
                        }`}
                      />
                      <div className="nameAndInstitution">
                        <h5>{`${users.service_rank}. ${users.first_name} ${users.last_name}`}</h5>
                        <p>{users?.institution}</p>
                      </div>
                    </div>
                  </Link>
                  ;
                  <SlOptionsVertical />
                </div>
                <div className="articleImages">
                  <img src={post.image} alt={post.subject} />
                </div>
                <div className="articleText">
                  <p>{post.content}</p>
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
          })}
    </>
  );
}

export default Posts;
