import React from 'react';
import { PaginationItem } from './PaginationItem';

const siblingsCount = 1;

function generatePagesArray(from, to) {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1;
    })
    .filter((page) => page > 0);
}

export const Pagination = ({
  totalRegisters,
  registersPerPage = 15,
  currentPage = 1,
  onPageChange,
}) => {
  const lastPage = Math.floor(totalRegisters / registersPerPage);

  const previousPage =
    currentPage > 1
      ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
      : [];

  const nextPages =
    currentPage < lastPage
      ? generatePagesArray(
          currentPage,
          Math.min(currentPage + siblingsCount, lastPage)
        )
      : [];

  return (
    <div className='pagination'>
      {currentPage > 1 + siblingsCount && (
        <>
          <PaginationItem onPageChange={onPageChange} pageNumber={1} />
          {currentPage > 2 + siblingsCount && <span>...</span>}
        </>
      )}

      {previousPage.length > 0 &&
        previousPage.map((page) => (
          <PaginationItem
            onPageChange={onPageChange}
            key={page}
            pageNumber={page}
          />
        ))}

      <PaginationItem onPageChange={onPageChange} pageNumber={currentPage} />

      {nextPages.length > 0 &&
        nextPages.map((page) => (
          <PaginationItem
            onPageChange={onPageChange}
            key={page}
            pageNumber={page}
          />
        ))}

      {currentPage + siblingsCount < lastPage && (
        <>
          {currentPage + 1 + siblingsCount < lastPage && <span>...</span>}
          <PaginationItem onPageChange={onPageChange} pageNumber={lastPage} />
        </>
      )}
    </div>
  );
};
