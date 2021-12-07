import React from 'react';

import './styles.scss';

export const PaginationItem = ({ pageNumber, onPageChange, isPageActive }) => {
  return (
    <button
      className='pagination__item'
      onClick={() => onPageChange(pageNumber)}
      disabled={isPageActive === pageNumber}
    >
      {pageNumber}
    </button>
  );
};
