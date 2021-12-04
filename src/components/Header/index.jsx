import React from 'react';

import './styles.scss';

export const Header = () => {
  return (
    <header className='header'>
      <div className='header__container'>
        <nav className='header__menu'>
          <span>Logo</span>
          <ul className='header__menu-list'>
            <li className='header__menu-item'>Item 1</li>
            <li className='header__menu-item'>Item 1</li>
          </ul>
        </nav>
      </div>
      <div className='header__box'>
        <h1 className='header__box-heading'>Meu album de Fotos velhas</h1>
      </div>
    </header>
  );
};
