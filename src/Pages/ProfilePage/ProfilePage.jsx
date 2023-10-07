import NavBar from "../../Components/NavBar/NavBar";
import profile from "../../../src/assets/profile.jpg";
import { AiTwotoneEdit } from "react-icons/ai";

import "./ProfilePage.css";

function ProfilePage() {
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

        <div className="user__posts__container"></div>
      </div>
    </div>
  );
}

export default ProfilePage;
