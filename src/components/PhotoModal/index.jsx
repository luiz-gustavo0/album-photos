import React from 'react';
import { useModalPhoto } from '../../hooks/useModalPhoto';

import iconClose from '../../img/close.svg';

import './styles.scss';

export const PhotoModal = () => {
  const { isActiveModal, handleCloseModal, imgSrc } = useModalPhoto();

  return (
    <div className={`modal ${isActiveModal ? ' modal--active' : ''}`}>
      <button className='modal__button' onClick={handleCloseModal}>
        <img src={iconClose} alt='Icone fechar' />
      </button>
      <div className='modal__content'>
        <img src={imgSrc} alt='Imagem' />
      </div>
    </div>
  );
};
