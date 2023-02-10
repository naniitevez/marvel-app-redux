import React from "react";
import { Button } from "react-bootstrap";

interface ButtonComponentProps {
  variant?: string;
  text: string;
  handleClick: () => void;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({
  variant,
  text,
  handleClick,
}) => {
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
