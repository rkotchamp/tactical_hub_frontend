import { useState } from "react";
import SideNavCompo from "../../Components/SideNavContainer/SideNavCompo";
import NavBar from "../../Components/NavBar/NavBar";
import ArticleSidesContainer from "../../Components/SideArticles/ArticleSidesContainer";
import Posts from "../../Components/Posts/Posts";
import NewPosts from "../../Components/newPosts/NewPosts";
import CreatePost from "../CreatePostPage/CreatePost";
import Logout from "../../Components/Logout.jsx/Logout";
import "./Home.css";

function Home() {
  //Hooks
  const [modalVisible, setModalVisible] = useState(false);
  const [logoutVisible, setLogoutVisible] = useState(false);

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
            <Posts />
            <Posts />
          </div>
        </div>
        <ArticleSidesContainer />
      </div>
    </div>
  );
}

export default Home;
