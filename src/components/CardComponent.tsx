import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/CardComponent.scss";

interface CardProps {
  isComic: boolean;
  name: string;
  image: string;
  id: number;
  price?: number;
}

const CardComponent: React.FC<CardProps> = ({
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
        {price !== undefined && <div className="price-content">${price}</div>}
        <img src={image} alt={name} />
      </div>
      <div className="text-container">
        <p>{name}</p>
      </div>
    </div>
  );
};

export default CardComponent;
