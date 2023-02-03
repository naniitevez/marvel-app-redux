import React from "react";
import { useMatch } from "react-router-dom";
import "../../styles/Navbar.scss";
import Logo from "./Logo";
import NavItem from "./NavItem";

const Navbar = () => {
const isHome = useMatch ('/');

  return (
    <header>
      <nav className="navbar">
        <Logo logo="/assets/marvel-studios-logo.jpeg" />
        <ul>
          {
            !isHome && <NavItem to="/" menuItem="Home" />
          }
          <NavItem to="/characters" menuItem="Personajes" />
          <NavItem to="/comics" menuItem="Cómics" />
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
