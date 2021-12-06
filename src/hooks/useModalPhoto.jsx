import React, { createContext, useContext, useState } from 'react';

export const ModalPhotoContext = createContext();

export const ModalPhotoProvider = ({ children }) => {
  const [isActiveModal, setIsActiveModal] = useState(false);
  const [imgSrc, setImgSrc] = useState('');

  function handleOpenModal(imgUrl) {
    setIsActiveModal(true);
    setImgSrc(imgUrl);
  }

  function handleCloseModal() {
    setIsActiveModal(false);
  }

  return (
    <ModalPhotoContext.Provider
      value={{
        isActiveModal,
        imgSrc,
        handleOpenModal,
        handleCloseModal,
      }}
    >
      {children}
    </ModalPhotoContext.Provider>
  );
};

export function useModalPhoto() {
  const context = useContext(ModalPhotoContext);

  return context;
}
