import React from 'react';

import './styles.scss';

export const Card = ({ imgSrc, label }) => {
  return (
    <div className='card'>
      <img
        src={imgSrc}
        alt={`Imagem ${label}`}
        loading='lazy'
        className='card__img'
      />
      <div className='card__label'>
        <span>{label}</span>
      </div>
    </div>
  );
};
