import React from "react";
import "../Navbar/Navbar.css";
import menuIcon from "../assets/menu.png";
import Logo from "../assets/logo.png";
import searchIcon from "../assets/search.png";
import uploadIcon from "../assets/upload.png";
import moreIcon from "../assets/more.png";
import notificationIcon from "../assets/notification.png";
import profileIcon from "../assets/jack.png";

const Navbar = ({ setSidebar }) => {
  return (
    <nav className="flexDiv">
      <div className="nav-left flex-div Logo">
        <img
          className="menu-icon"
          onClick={() => setSidebar((prev) => (prev === false ? true : false))}
          src={menuIcon}
          alt=""
        />
        <img className="Logo" src={Logo} alt="" />
      </div>

      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <input type="text" placeholder="Search here" />
          <img src={searchIcon} alt="" />
        </div>
      </div>

      <div className="nav-right flex-div">
        <img src={uploadIcon} alt="" />
        <img src={moreIcon} alt="" />
        <img src={notificationIcon} alt="" />
        <img src={profileIcon} className="user-icon" alt="" />
      </div>
    </nav>
  );
};

export default Navbar;
