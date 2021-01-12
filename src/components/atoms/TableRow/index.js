import React from 'react';
import styled from 'styled-components';
import variables from 'settings/variables';

const TableRow = ({row, getStyles}) => {
  const formatSubRows = (depth) => {
    return depth > 0 ? 'td subrows' : 'td';
  };

  const cellProps = (props, {cell}) => getStyles(props, cell.column.justifyContent, cell.column.alignItems);

  return (
    <StyledTableRow {...row.getToggleRowExpandedProps()} {...row.getRowProps()}>
      {row.cells.map((cell) => {
        return (
          <StyledTableCell className={cell.column.rowClassNames ? cell.column.rowClassNames : ''} {...cell.getCellProps(cellProps)}>
            {cell.isGrouped ? (
              <>
                <span {...row.getToggleRowExpandedProps()}>{row.isExpanded ? '👇' : '👉'}</span>
                {cell.render('Cell')} ({row.subRows.length})
              </>
            ) : cell.isAggregated ? (
              !cell.column.disableRenderingOnGroupRow && cell.render('Aggregated')
            ) : cell.isPlaceholder ? null : (
              <>{cell.render('Cell')}</>
            )}
          </StyledTableCell>
        );
      })}
    </StyledTableRow>
  );
};

export default TableRow;

const StyledTableRow = styled.div`
  min-height: 50px;
  padding: 1rem 0;
  border-bottom: 1px solid ${variables.borderColor};
`;
const StyledTableCell = styled.div`
  font-weight: bold;
`;
