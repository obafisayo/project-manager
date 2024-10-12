// PaginatedList.tsx
import React, { useState } from 'react';
import { Pagination } from 'antd';
import './PaginatedList.css'

interface PaginatedListProps<T> {
  items: T[];
  pageSize: number;
  renderItem: (item: T) => React.ReactNode;
}

const PaginatedList = <T,>({ items, pageSize, renderItem }: PaginatedListProps<T>) => {
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedItems = items.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div className="render-items">
        {paginatedItems.length > 0 ? (
          paginatedItems.map(renderItem)
        ) : (
          <p>No items available</p>
        )}
      </div>
      <Pagination
        current={currentPage}
        pageSize={pageSize}
        total={items.length}
        onChange={handlePageChange}
        showSizeChanger={false}
      />
    </div>
  );
};

export default PaginatedList;
