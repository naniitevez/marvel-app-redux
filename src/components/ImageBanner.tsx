import React from "react";
import { ImageBannerProps } from "../types/types";

const ImageBanner: React.FC<ImageBannerProps> = ({ image, alt }) => {
  return (
    <div className="banner-container">
      <img src={image} alt={alt} />
    </div>
  );
};

export default ImageBanner;
