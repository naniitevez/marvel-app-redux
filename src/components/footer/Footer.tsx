import React from "react";
import { useAppSelector } from "../../redux/hooks";
import { getAllCharacters } from "../../redux/charactersSlice"
import "../../styles/Footer.scss";

const Footer = () => {
  const state = useAppSelector(getAllCharacters)
  return (
    <footer dangerouslySetInnerHTML={{ __html: state.attributionHTML }}>
    </footer>
  );
};

export default Footer;
