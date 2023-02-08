import React from "react";
import { useAppSelector } from "../../redux/hooks";
import { getAllCharactersState } from "../../redux/charactersSlice";
import "../../styles/Footer.scss";

const Footer = () => {
  const { attributionHTML } = useAppSelector(getAllCharactersState);
  return (
    <footer dangerouslySetInnerHTML={{ __html: attributionHTML }}></footer>
  );
};

export default Footer;
