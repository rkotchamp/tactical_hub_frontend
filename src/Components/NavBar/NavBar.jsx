import { useRef } from "react";
import AvatarProfile from "../AvatarProfile/AvatarProfile";
import avatar from "../../assets/profile.jpg";
import SearchBar from "../searchBar/SearchBar";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

import "./NavBar.css";

function NavBar({ setCreatePost }) {
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
    console.log("great");
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
            <button className="nav-btn nav-close-btn" onClick={showNavBar}>
              <FaTimes />
            </button>
          </ul>
        </nav>
        {/* <div className="profile">
          <img src={avatar} alt="" />
        </div> */}
        <Link to="/profile">
          <AvatarProfile avatar={avatar} />
        </Link>
        <button className="nav-btn " onClick={showNavBar}>
          <FaBars />
        </button>
      </div>
    </div>
  );
}

export default NavBar;
