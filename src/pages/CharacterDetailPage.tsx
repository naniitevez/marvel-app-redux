import React from "react";
import { useParams } from "react-router-dom";

const CharacterDetailPage = () => {
  let { id } = useParams();
  const heroId = Number(id);

  console.log("ID: ", heroId);

  return <div>ID : {heroId}</div>;
};

export default CharacterDetailPage;
