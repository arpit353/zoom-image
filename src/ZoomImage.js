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
          src="https://fastly.picsum.photos/id/935/200/300.jpg?hmac=XPPjHEBtYb6Y3-p1EjAP0RRB0bNlvqCs52VIysO7iH0"
          alt="Original"
          className="image"
        />
      </div>
      {zoomPosition.visible && (
        <div
          className="zoomPanel"
          style={{
            backgroundImage: "url(https://fastly.picsum.photos/id/935/200/300.jpg?hmac=XPPjHEBtYb6Y3-p1EjAP0RRB0bNlvqCs52VIysO7iH0)",
            backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
          }}
        />
      )}
    </div>
  );
};

export default ZoomImage;
