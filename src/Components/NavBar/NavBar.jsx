import AvatarProfile from "../AvatarProfile/AvatarProfile";
import avatar from "../../assets/profile.jpg";
import SearchBar from "../searchBar/SearchBar";

import "./NavBar.css";

function NavBar() {
  return (
    <div className="navContainer">
      <SearchBar />
      <div className="navAndProfile">
        <nav>
          <ul>
            <li>Explore</li>
            <li>Create Post</li>
          </ul>
        </nav>
        {/* <div className="profile">
          <img src={avatar} alt="" />
        </div> */}
        <AvatarProfile avatar={avatar} />
      </div>
    </div>
  );
}

export default NavBar;
