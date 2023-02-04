import React from "react";
import { Button } from "react-bootstrap";
import { ButtonComponentProps } from "../types/types";

const ButtonComponent: React.FC<ButtonComponentProps> = ({ variant, text, handleClick }) => {
  return (
    <Button
      onClick={handleClick}
      variant={variant ? variant : "outline-danger"}
    >
      {text}
    </Button>
  );
};

export default ButtonComponent;
