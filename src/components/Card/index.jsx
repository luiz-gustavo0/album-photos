import React from 'react';
import { useNavigate } from 'react-router-dom';

import './styles.scss';

export const Card = ({ imgSrc, label, album }) => {
  const navigate = useNavigate();

  return (
    <div className='card' onClick={() => navigate(`/photos/${album}`)}>
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
