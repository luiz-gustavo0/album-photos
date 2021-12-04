import React from 'react';

export const PhotoItem = ({ photo }) => {
  return (
    <div className='photo'>
      <img src={photo.src.large} alt='' className='photo__img' />
    </div>
  );
};
