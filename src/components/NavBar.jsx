import React from "react";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink
        to="/home"
      >
        Home
      </NavLink>

      <NavLink
        to="/s1-kanto"
      >
        Kanto
      </NavLink>

      <NavLink
        to="/s2-johto"
      >
        Johto
      </NavLink>
    
      <NavLink
        to="/s3-hoenn"
      >
        Hoenn
      </NavLink>
    </div>
  );
};
