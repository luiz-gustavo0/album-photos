import React from 'react';

export const PhotoItem = ({ photo }) => {
  return (
    <div className='photo'>
      <img
        src={photo.src.large}
        alt='Imagem'
        className='photo__img'
        loading='lazy'
      />
    </div>
  );
};
