import React, { useState } from "react";
import { useMatch } from "react-router-dom";
import "../../styles/Navbar.scss";
import Logo from "./Logo";
import NavItem from "./NavItem";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const isHome = useMatch("/");

  const handleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <header>
      <nav className="navbar">
        <Logo logo="/assets/marvel-studios-logo.jpeg" />
        <ul className="desktop-menu">
          {!isHome && <NavItem to="/" menuItem="Home" />}
          <NavItem to="/characters" menuItem="Personajes" />
          <NavItem to="/comics" menuItem="Cómics" />
        </ul>

        <div className="hamburger-container">
          <div onClick={() => handleMenu()} className="img-container">
            <img src="/assets/hamburger-svgrepo-com.svg" alt="menu hamburguesa" />
          </div>
          <div className="menu" style={{ display: `${isActive ? "contents" : "none"}` }}>
            <ul>
              {!isHome && <NavItem to="/" menuItem="Home" />}
              <NavItem to="/characters" menuItem="Personajes" />
              <NavItem to="/comics" menuItem="Cómics" />
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
