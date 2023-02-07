import React from "react";
import { useAppSelector } from "../../redux/hooks";
import { getAllCharactersState } from "../../redux/charactersSlice"
import "../../styles/Footer.scss";

const Footer = () => {
  const state = useAppSelector(getAllCharactersState)
  return (
    <footer dangerouslySetInnerHTML={{ __html: state.attributionHTML }}>
    </footer>
  );
};

export default Footer;
