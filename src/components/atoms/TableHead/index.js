import React from 'react';

const TableHead = ({column, getStyles}) => {
  const {align, hideHeader, isSorted, isSortedDesc, disableSortBy} = column;

  if (column.id === 'userAdded') {
    column.groupedIndex = -2;
  }

  const headerProps = (props, {column}) => getStyles(props, column.justifyContent, column.alignItems);

  return (
    <div {...column.getHeaderProps(column.getSortByToggleProps(headerProps))}>
      <div>
        {!hideHeader ? (
          <>
            {column.render('Header')}
            {!disableSortBy ? (
              isSorted ? (
                isSortedDesc ? (
                  <i className="fas fa-sort-down ml-1"></i>
                ) : (
                  <i className="fas fa-sort-up ml-1"></i>
                )
              ) : (
                <i className="fas fa-sort ml-1"></i>
              )
            ) : null}
          </>
        ) : null}
      </div>
    </div>
  );
};

export default TableHead;
