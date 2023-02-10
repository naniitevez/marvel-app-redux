import React from "react";
import { Link } from "react-router-dom";

interface NavItemProps {
  to: string;
  menuItem: string;
}

const NavItem: React.FC<NavItemProps> = ({ to, menuItem }) => {
  return (
    <li>
      <Link to={to}>{menuItem}</Link>
    </li>
  );
};

export default NavItem;
