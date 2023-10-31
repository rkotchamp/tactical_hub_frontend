import { useState, useContext } from "react";
import SideNavCompo from "../../Components/SideNavContainer/SideNavCompo";
import NavBar from "../../Components/NavBar/NavBar";
import ArticleSidesContainer from "../../Components/SideArticles/ArticleSidesContainer";
import Posts from "../../Components/Posts/Posts";
import NewPosts from "../../Components/newPosts/NewPosts";
import CreatePost from "../CreatePostPage/CreatePost";
import Logout from "../../Components/Logout.jsx/Logout";
import AllUsersContext from "../../contexts/AllUsersContext";
import ArticleContext from "../../contexts/ArticleContext";
import "./Home.css";

function Home() {
  //Hooks
  const { totalUsers } = useContext(AllUsersContext);
  const { posts } = useContext(ArticleContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [logoutVisible, setLogoutVisible] = useState(false);
  console.log(posts);
  console.log(totalUsers);

  //functions/methods
  const openModal = () => {
    setModalVisible(true);
  };

  const closModal = () => {
    setModalVisible(false);
  };
  const cancelLogout = () => {
    setLogoutVisible(false);
  };
  const openLogout = () => {
    setLogoutVisible(true);
  };

  return (
    <div>
      {modalVisible && <CreatePost closeModal={closModal} />}
      {logoutVisible && (
        <Logout closeLogout={cancelLogout} click={cancelLogout} />
      )}
      <NavBar setCreatePost={openModal} logOut={openLogout} />
      <div className="homeContainer">
        <SideNavCompo />
        <div className="post">
          <NewPosts openModalUp={openModal} />
          <div className="articlePosts">
            {posts.map((post) => {
              const user = totalUsers.find((u) => u.id === post.user_id);
              return (
                <Posts
                  fullNameAndRank={`${user.service_rank}. ${user.first_name} ${user.last_name}`}
                  UserInstitution={user.institution}
                  postImage={post.image}
                  postContent={post.content}
                  avatar={post.image}
                  key={post.id}
                />
              );
            })}
          </div>
        </div>
        <ArticleSidesContainer />
      </div>
    </div>
  );
}

export default Home;
