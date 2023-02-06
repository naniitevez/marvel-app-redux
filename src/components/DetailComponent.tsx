import React from "react";
import { DetailComponentProps } from "../types/types";

const DetailComponent: React.FC<DetailComponentProps> = ({
  isComic,
  name,
  image,
  description,
  comics,
}) => {
  return (
    <div>
      <section className="character-info">
        <div className="image-container">
          <h1>{name}</h1>
          <img src={image} alt={name} />
        </div>
        <div className="text-container">
          <p>{description}</p>
        </div>
      </section>
      {isComic ? (
        <div className="price-container"></div>
      ) : (
        <div className="comics-container"></div>
      )}
    </div>
  );
};

export default DetailComponent;
