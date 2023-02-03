import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./HeaderLayout.Module.css";

const HeaderLayout = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </nav>
      <Outlet />
    </>
  );
};

export default HeaderLayout;
