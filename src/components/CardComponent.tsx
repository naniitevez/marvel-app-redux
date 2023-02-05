import React, { useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { HeroeCardProps } from "../types/heroes";
import ButtonComponent from "./ButtonComponent";

const CardComponent: React.FC<HeroeCardProps> = ({ name, image, id }) => {
  let navigate = useNavigate();

  const handleConsole = () => {
    navigate(`/characters/${id}`);
  };

  return (
    <div className="card-item">
      <Link to="" className="image-container">
        <img src={image} alt={name} />
      </Link>
      <div className="text-container">
        <Link to="">
          <p>{name}</p>
        </Link>
        <ButtonComponent text="Detalle" handleClick={handleConsole} />
      </div>
    </div>
  );
};

export default CardComponent;
