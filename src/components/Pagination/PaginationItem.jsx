import React from 'react';

import './styles.css';

export const PaginationItem = ({ pageNumber, onPageChange }) => {
  return (
    <div className='container' onClick={() => onPageChange(pageNumber)}>
      <span>{pageNumber}</span>
    </div>
  );
};
