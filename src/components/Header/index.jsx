import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

export const Header = () => {
  return (
    <header className='header'>
      <div className='header__container'>
        <span className='header__logo'>Memories</span>
        <nav>
          <ul className='menu'>
            <li className='menu__item'>
              <Link to='/'>Home</Link>
            </li>
            <li className='menu__item'>
              <Link to='/'>Sobre</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
