import React from 'react';
import styles from '../styles/Header.module.css';
const Header = () => {
  return (
    <div className={styles.container}>
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
        <img src='/logo_luciela.svg' height='100%' />
      </div>
      <div className={styles.containerRight}>
        <div className={styles.searchBar}>
          <img src='/iconsearch.svg' height='70%' />
          <div>Buscar</div>
        </div>
        <div className={styles.personlogo}>
          <img src='/person.svg' height='100%' />
        </div>
        <div className={styles.baglogo}>
          <img src='/bagicon.svg' height='100%' />
        </div>
      </div>
    </div>
  );
};

export default Header;
