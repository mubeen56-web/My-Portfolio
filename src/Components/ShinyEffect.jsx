import React from 'react'

const ShinyEffect = ({ left, right, top, size = 50 }) => {
  const positionStyles = {
    top: `${top}px`,
    width: `${size}px`,
    height: `${size}px`,
    zIndex: -1, // Corrected the case
    position: "absolute", // Ensure it positions correctly
  };

  if (left !== undefined) {
    positionStyles.left = `${left}px`;
  }
  if (right !== undefined) {
    positionStyles.right = `${right}px`; // Corrected from 'left' to 'right'
  }

  return <div className="shiny-effect" style={positionStyles}></div>;
};

export default ShinyEffect;
