// src/components/TangentCircleSquare.js
import React from 'react';
import styles from '../styles/Curtain.module.css';

const TangentCircleSquare = ({ index, circlesPerRow, circleSize }) => {
  const row = Math.floor(index / circlesPerRow);
  const col = index % circlesPerRow;

  const top = row * circleSize - (window.scrollY % circleSize);
  const left = col * circleSize;

  return (
    <div
      className={styles.rectangle}
      style={{
        top: `${top}px`,
        left: `${left}px`,
        width: `${circleSize}px`,
        height: `${circleSize}px`,
        lineHeight: `${circleSize}px`,
      }}
    ></div>
  );
};

export default TangentCircleSquare;
