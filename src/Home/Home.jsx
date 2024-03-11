import React from "react";
import "./Home.css";
import Sidebar from "../SideBar/Sidebar.jsx";
import Feed from "../Feed/Feed.jsx";

const Home = ({ sidebar }) => {
  return (
    <>
      <Sidebar sidebar={sidebar} />
      <div className={`container ${sidebar ? "" : "large-container"}`}>
        <Feed />
      </div>
    </>
  );
};

export default Home;
