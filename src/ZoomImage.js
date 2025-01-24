import React, { useState } from "react";
import "./ZoomImage.css"; // Create this CSS file for styles

const ZoomImage = () => {
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0, visible: false });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setZoomPosition({ x, y, visible: true });
  };

  const handleMouseLeave = () => {
    setZoomPosition({ ...zoomPosition, visible: false });
  };

  return (
    <div className="container">
      <div
        className="imageWrapper"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src="https://fastly.picsum.photos/id/7/4728/3168.jpg?hmac=c5B5tfYFM9blHHMhuu4UKmhnbZoJqrzNOP9xjkV4w3o"
          alt="Original"
          className="image"
        />
        {zoomPosition.visible && (
          <div
            className="highlight"
            style={{
              top: `calc(${zoomPosition.y}% - 50px)`,
              left: `calc(${zoomPosition.x}% - 50px)`,
            }}
          />
        )}
      </div>
      {zoomPosition.visible && (
        <div
          className="zoomPanel"
          style={{
            backgroundImage: "url(https://fastly.picsum.photos/id/7/4728/3168.jpg?hmac=c5B5tfYFM9blHHMhuu4UKmhnbZoJqrzNOP9xjkV4w3o)",
            backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
          }}
        />
      )}
    </div>
  );
};

export default ZoomImage;
