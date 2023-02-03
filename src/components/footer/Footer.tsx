import React from "react";
import { useAppSelector } from "../../redux/hooks";
import { getHeroes } from "../../redux/heroesSlice"
import "../../styles/Footer.scss";

const Footer = () => {
  const state = useAppSelector(getHeroes)
  return (
    <footer dangerouslySetInnerHTML={{ __html: state.attributionHTML }}>
    </footer>
  );
};

export default Footer;
