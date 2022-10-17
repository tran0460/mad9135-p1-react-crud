import React from "react";
import { NavLink } from "react-router-dom";

const AppHeader = () => {
  return (
    <div>
      AppHeader
      <NavLink to="list">List</NavLink>
      <NavLink to="new">New</NavLink>
    </div>
  );
};

export default AppHeader;
