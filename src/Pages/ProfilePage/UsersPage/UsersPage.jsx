import { useState, useContext } from "react";
import AllUsersContext from "../../../contexts/AllUsersContext";
import UserContext from "../../../contexts/UserContext";
import NavBar from "../../../Components/NavBar/NavBar";
import ArticleContext from "../../../contexts/ArticleContext";
import PostsOnProfilePage from "../../../Components/PostsOnProfilePage/PostsOnProfilePage";
import policing from "../../../assets/articlesImage.jpg";
import addPlus from "../../../assets/plus.png";
import { Link, useParams } from "react-router-dom";
import CreatePost from "../../../Pages/CreatePostPage/CreatePost";
import Avatar from "@mui/material/Avatar";
import LoadingSpinner from "../../../Components/LoaderSpinner/LoadingSpinner";

import "../ProfilePage.css";

function UsersPage() {
  // HOOKS

  const [openModalProfile, setOpenModalProfile] = useState(false);
  const { posts, setPosts } = useContext(ArticleContext);
  const { totalUsers } = useContext(AllUsersContext);
  const { isLoading } = useContext(UserContext);

  const { id } = useParams();

  // Methods
  const user = totalUsers.find((u) => u.id === Number(id));

  const openModalPop = () => {
    setOpenModalProfile(true);
  };
  const closeModalPop = () => {
    setOpenModalProfile(false);
  };

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="profileContainer">
          {openModalProfile && <CreatePost closeModal={closeModalPop} />}
          <NavBar setCreatePost={openModalPop} />
          {/* <NavBar /> */}
          <div className="main_page_content">
            {/* {openModalProfile && <CreatePost />} */}
            <div className="profile__Info__Container">
              <div className="image__Avatar__Container">
                <div className="main__profile">
                  {user.profile_image ? (
                    <img src={user?.profile_image} alt="" />
                  ) : (
                    <Avatar sx={{ width: 100, height: 100 }} src={null} />
                  )}
                </div>
              </div>

              <div className="user__Info">
                <h1>{`${user?.service_rank}. ${user?.first_name} ${user?.last_name}`}</h1>
                <div className="rank__institution">
                  <p>{user?.institution}</p>
                  <p>{user?.department + " officer"}</p>
                </div>
                <p className="bio">{user.bio ? user?.bio : "Your bio here"}</p>
              </div>
              <Link to="/edit-profile">{/* <AiTwotoneEdit /> */}</Link>
            </div>

            <div className="user__posts__container">
              <div className="ToggleButtons">
                <button className={"btnToggle btnActive"}>Posts</button>
              </div>

              <div className="usersPosts">
                {posts
                  .slice()
                  .reverse()
                  .map((post) => {
                    return post.user_id === user.id ? (
                      <PostsOnProfilePage img={post.image} key={post.id} />
                    ) : null;
                  })}

                <PostsOnProfilePage svgImg={addPlus} click={openModalPop} />
              </div>

              {/* {toggleSave && (
                <div className="usersSaved">
                  <PostsOnProfilePage img={policing} />
                </div>
              )} */}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default UsersPage;
