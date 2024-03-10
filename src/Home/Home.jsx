import React from "react";

import Sidebar from "../SideBar/Sidebar.jsx";

const Home = ({ sidebar }) => {
  return (
    <>
      <Sidebar sidebar={sidebar} />
    </>
  );
};

export default Home;
