import React from "react";
import { Link } from "react-router-dom";
import { NavItemProps } from "../../types";

const NavItem: React.FC<NavItemProps> = ({ to, menuItem }) => {
  return (
    <li>
      <Link to={to}>{menuItem}</Link>
    </li>
  );
};

export default NavItem;
