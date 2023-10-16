import { useState } from "react";
import SideNavCompo from "../../Components/SideNavContainer/SideNavCompo";
import NavBar from "../../Components/NavBar/NavBar";
import ArticleSidesContainer from "../../Components/SideArticles/ArticleSidesContainer";
import Posts from "../../Components/Posts/Posts";
import NewPosts from "../../Components/newPosts/NewPosts";
import CreatePost from "../CreatePostPage/CreatePost";
import "./Home.css";

function Home() {
  //Hooks
  const [modalVisible, setModalVisible] = useState(false);

  //functions/methods
  const openModal = () => {
    setModalVisible(true);
  };

  const closModal = () => {
    setModalVisible(false);
    console.log(modalVisible);
  };

  return (
    <div>
      {modalVisible && <CreatePost closeModal={closModal} />}
      <NavBar setCreatePost={openModal} />
      <div className="homeContainer">
        <SideNavCompo />
        <div className="post">
          <NewPosts />
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
