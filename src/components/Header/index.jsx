import React from 'react';

import './styles.scss';

export const Header = () => {
  return (
    <header className='header'>
      <div className='header__container'>
        <div className='header__box'>
          <h1 className='header__box-heading' style={{ fontWeight: 400 }}>
            Memories
          </h1>
        </div>
      </div>
    </header>
  );
};
