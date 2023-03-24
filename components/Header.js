import React, { useEffect, useState } from 'react';
import styles from '../styles/Header.module.css';
const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        setScrollPosition(window.scrollY);
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  let headerStyles = {};
  let changeColor = {};
  let black = false;
  if (typeof window !== 'undefined' && scrollPosition > window.innerHeight) {
    headerStyles = {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 999,
      color: 'black',
      background:
        'linear-gradient(to bottom, rgba(255, 255, 255, 0.7), #ffffff)',
    };
    changeColor = {
      borderBottom: '1px solid black',
    };
    black = true;
  }
  return (
    <div className={styles.container} style={headerStyles}>
      <div className={styles.containerLeft}>
        <ul>
          <li>Tienda</li>
          <li>Sobre Luciela</li>
          <li>Sostenibilidad</li>
          <li>A Medida</li>
          <li>Contacto</li>
        </ul>
      </div>
      <div className={styles.containerLogo}>
        {!black ? (
          <img src='/logo_luciela.svg' height='100%' />
        ) : (
          <img src='/logo_luciela_black.svg' height='100%' />
        )}
      </div>
      <div className={styles.containerRight}>
        <div className={styles.searchBar} style={changeColor}>
          {!black ? (
            <img src='/iconsearch.svg' height='100%' />
          ) : (
            <img src='/iconsearch_black.svg' height='100%' />
          )}
          <div>Buscar</div>
        </div>
        <div className={styles.personlogo}>
          {!black ? (
            <img src='/person.svg' height='100%' />
          ) : (
            <img src='/person_black.svg' height='100%' />
          )}
        </div>
        <div className={styles.baglogo}>
          {!black ? (
            <img src='/bagicon.svg' height='100%' />
          ) : (
            <img src='/bagicon_black.svg' height='100%' />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
