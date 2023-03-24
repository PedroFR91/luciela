import React, { useState, useEffect } from 'react';
import styles from '../styles/Curtain.module.css';
import TangentCircleSquare from './TangentCircleSquare';
import useWindowSize from '../hooks/useWindowSize';

const Curtain = () => {
  const windowSize = useWindowSize();
  const circlesPerRow = 15;
  const circleSize = Math.floor(windowSize.width / circlesPerRow);

  const rows = Math.ceil(windowSize.height / circleSize);
  const numberOfElements = circlesPerRow * rows;

  const [curtainVisible, setCurtainVisible] = useState(false);

  useEffect(() => {
    setCurtainVisible(true);
  }, []);

  if (typeof window === 'undefined') {
    return null;
  }

  const handleScroll = () => {
    if (window.scrollY >= window.innerHeight) {
      setCurtainVisible(false);
    } else {
      setCurtainVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    curtainVisible && (
      <div
        className={styles.curtain}
        style={{ transform: `translateY(-${window.scrollY}px)` }}
      >
        {Array.from({ length: numberOfElements }, (_, index) => (
          <TangentCircleSquare
            key={index}
            index={index}
            circlesPerRow={circlesPerRow}
            circleSize={circleSize}
          />
        ))}
      </div>
    )
  );
};

export default Curtain;
