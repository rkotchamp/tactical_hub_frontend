import NavBar from "../../Components/NavBar/NavBar";
import profile from "../../../src/assets/profile.jpg";
import { useState } from "react";
import { AiTwotoneEdit } from "react-icons/ai";
import PostsOnProfilePage from "../../Components/PostsOnProfilePage/PostsOnProfilePage";
import policing from "../../assets/articlesImage.jpg";
import addPlus from "../../assets/plus.png";

import "./ProfilePage.css";

function ProfilePage() {
  const [togglePost, setTogglePost] = useState(true);
  const [toggleSave, setToggleSave] = useState(false);

  const handleTogglePost = () => {
    setTogglePost(true);
    setToggleSave(false);
  };
  const handleToggleSave = () => {
    setToggleSave(true);
    setTogglePost(false);
  };
  return (
    <div className="profileContainer">
      <NavBar />
      <div className="main_page_content">
        <div className="profile__Info__Container">
          <div className="image__Avatar__Container">
            <div className="main__profile">
              <img src={profile} alt="" />
            </div>
          </div>

          <div className="user__Info">
            <h1>Sgt. Aaron Tacker</h1>
            <div className="rank__institution">
              <p>Ghana Police Service</p>
              <p>SWAT Officer</p>
            </div>
            <p className="bio">
              I am a police who has high ambitions and work greatly with my team
              on a tactical ground .Work as i work and move and i move
            </p>
          </div>
          <AiTwotoneEdit />
        </div>

        <div className="user__posts__container">
          <div className="ToggleButtons">
            <button
              className={`${togglePost ? "btnActive btnToggle" : "btnToggle"}`}
              onClick={handleTogglePost}
            >
              Posts
            </button>
            <button
              className={`${toggleSave ? "btnActive btnToggle" : " btnToggle"}`}
              onClick={handleToggleSave}
            >
              Saved
            </button>
          </div>
          {togglePost && (
            <div className="usersPosts">
              <PostsOnProfilePage img={policing} />
              <PostsOnProfilePage img={policing} />
              <PostsOnProfilePage img={policing} />

              <PostsOnProfilePage svgImg={addPlus} />
            </div>
          )}
          {toggleSave && <div className="usersSaved">Save</div>}
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
