import React, { useState } from "react";
import Navbar from "./Navbar/Navbar.jsx";
import { Vedio } from "./Vedio/Vedio.jsx";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home.jsx";

const App = () => {
  const [sidebar, setSidebar] = useState(true);

  return (
    <div>
      <Navbar setSidebar={setSidebar} />
      <Routes>
        <Route path="/" element={<Home sidebar={sidebar} />} />
        <Route path="/video/:categroyId/:vedioId" element={<Vedio />} />
      </Routes>
    </div>
  );
};

export default App;
