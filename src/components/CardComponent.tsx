import React from "react";
import { useNavigate } from "react-router-dom";
import { HeroeCardProps } from "../types/heroes";
import ButtonComponent from "./ButtonComponent";

const CardComponent: React.FC<HeroeCardProps> = ({
  isComic,
  name,
  image,
  id,
  price,
}) => {
  let navigate = useNavigate();

  const handleNavigate = () => {
    if (isComic) {
      navigate(`/comics/${id}`);
    } else {
      navigate(`/characters/${id}`);
    }
  };

  return (
    <div className="card-item">
      <div onClick={handleNavigate} className="image-container">
        {price && <span className="price-contant">${price}</span>}
        <img src={image} alt={name} />
      </div>
      <div className="text-container">
        <div>
          <p>{name}</p>
        </div>
        <ButtonComponent text="Detalle" handleClick={handleNavigate} />
      </div>
    </div>
  );
};

export default CardComponent;
