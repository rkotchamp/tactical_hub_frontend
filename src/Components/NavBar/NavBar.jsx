import { useRef, useContext, useState } from "react";
import AvatarProfile from "../AvatarProfile/AvatarProfile";
import avatar from "../../assets/profile.jpg";
import SearchBar from "../searchBar/SearchBar";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import UserContext from "../../contexts/UserContext";

import "./NavBar.css";

function NavBar({ setCreatePost, logOut }) {
  const { user } = useContext(UserContext);
  const navRef = useRef();
  const Menus = ["Profile", "logout", "about user"];
  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <div className="navContainer">
      <SearchBar />
      <div className="navAndProfile">
        <nav ref={navRef}>
          <ul>
            <Link to="/home">
              <li>Explore</li>
            </Link>
            <li onClick={setCreatePost}>Create Post</li>
            <li onClick={logOut}>Logout</li>
            <button className="nav-btn nav-close-btn" onClick={showNavBar}>
              <FaTimes />
            </button>
          </ul>
        </nav>
        {/* <div className="profile">
          <img src={avatar} alt="" />
        </div> */}
        <Link to="/profile">
          <AvatarProfile avatar={user ? user?.profile_image : null} />
        </Link>
        {/* <div className="dropdown">
          <ul>
            {Menus.map((menu) => {
              <li key={menu}>{menu}</li>;
            })}
          </ul>
        </div> */}
        <button className="nav-btn " onClick={showNavBar}>
          <FaBars />
        </button>
      </div>
    </div>
  );
}

export default NavBar;
