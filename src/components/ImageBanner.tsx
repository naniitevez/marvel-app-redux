import React from "react";

interface ImageBannerProps {
  image: string;
  alt: string;
}

const ImageBanner: React.FC<ImageBannerProps> = ({ image, alt }) => {
  return (
    <div className="banner-container">
      <img src={image} alt={alt} />
    </div>
  );
};

export default ImageBanner;
