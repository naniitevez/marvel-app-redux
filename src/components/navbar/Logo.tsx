import React from "react";
import { Link } from "react-router-dom";

interface LogoProps {
  logo: string;
}

const Logo: React.FC<LogoProps> = ({ logo }) => {
  return (
    <Link to="/">
      <img src={logo} alt="Marvel Logo" />
    </Link>
  );
};

export default Logo;
