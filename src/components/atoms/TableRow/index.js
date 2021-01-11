import React from 'react';

const TableRow = ({row, getStyles}) => {
  const formatSubRows = (depth) => {
    return depth > 0 ? 'td subrows' : 'td';
  };

  const cellProps = (props, {cell}) => getStyles(props, cell.column.justifyContent, cell.column.alignItems);

  return (
    <div {...row.getToggleRowExpandedProps()} {...row.getRowProps()}>
      {row.cells.map((cell) => {
        return (
          <div className={cell.column.rowClassNames ? cell.column.rowClassNames : ''} {...cell.getCellProps(cellProps)}>
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
          </div>
        );
      })}
    </div>
  );
};

export default TableRow;
