import React from 'react';

import './styles.scss';

export const PaginationItem = ({ pageNumber, onPageChange }) => {
  return (
    <button
      className='pagination__item'
      onClick={() => onPageChange(pageNumber)}
    >
      {pageNumber}
    </button>
  );
};
