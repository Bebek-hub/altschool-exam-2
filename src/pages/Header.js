import React from "react";

import { NavLink } from "react-router-dom";

const CustomNavLink = ({ to, ...props }) => {
  let activeStyle = {
    textDecoration: "underline",
    color: "red",
    transition: "all 4s",
  };

  return (
    <NavLink
      style={({ isActive }) =>
        isActive ? activeStyle : { textDecoration: "none", color: "#fff" }
      }
      to={to}
      end
      {...props}
    />
  );
};

const Header = () => {
  return (
    <nav id="navigation">
      <h1 href="#" className="logo">
        OGF
      </h1>
      <CustomNavLink to="/home">Home</CustomNavLink>
      <CustomNavLink to="/about">About</CustomNavLink>
      <CustomNavLink to="/user">User</CustomNavLink>
      <CustomNavLink to="/login">Login</CustomNavLink>
    </nav>
  );
};

export default Header;
