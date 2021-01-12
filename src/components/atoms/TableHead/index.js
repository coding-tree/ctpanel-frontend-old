import React from 'react';
import styled from 'styled-components';
import variables from 'settings/variables';

const TableHead = ({column, getStyles}) => {
  const {align, hideHeader, isSorted, isSortedDesc, disableSortBy} = column;

  if (column.id === 'userAdded') {
    column.groupedIndex = -2;
  }

  const headerProps = (props, {column}) => getStyles(props, column.justifyContent, column.alignItems);

  return (
    <StyledTableHead {...column.getHeaderProps(column.getSortByToggleProps(headerProps))}>
      <StyledTableCell>
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
      </StyledTableCell>
    </StyledTableHead>
  );
};

export default TableHead;

const StyledTableHead = styled.div`
  background-color: ${variables.tableHeaderColor};
  min-height: 50px;
  border-top: 1px solid ${variables.tableBorderColor};
  border-bottom: 1px solid ${variables.tableBorderColor};
`;
const StyledTableCell = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  gap: 0.5rem;
  font-weight: bold;
  color: ${variables.colorLink};
`;
