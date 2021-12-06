import React from 'react';
import { useModalPhoto } from '../../hooks/useModalPhoto';

export const PhotoItem = ({ photo }) => {
  const { handleOpenModal } = useModalPhoto();

  return (
    <div className='photo'>
      <img
        src={photo.src.large}
        alt='Imagem'
        className='photo__img'
        loading='lazy'
        onClick={() => {
          handleOpenModal(photo.src.large);
        }}
      />
    </div>
  );
};
