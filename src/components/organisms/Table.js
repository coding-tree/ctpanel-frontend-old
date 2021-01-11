import TableHead from 'components/atoms/TableHead';
import TableRow from 'components/atoms/TableRow';
import React from 'react';
import {useExpanded, useFlexLayout, useRowSelect, useSortBy, useTable} from 'react-table';

const Table = ({columns, data}) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state: {expanded},
  } = useTable(
    {
      columns,
      data,
    },
    useSortBy,
    useExpanded,
    useFlexLayout,
    useRowSelect
  );

  const getStyles = (props, justifyContent = 'left', alignItems = 'center') => [
    props,
    {
      style: {
        justifyContent: justifyContent === 'right' ? 'flex-end' : 'flex-start',
        alignItems: alignItems === 'center' ? 'center' : 'stretch',
        display: 'flex',
      },
    },
  ];

  return (
    <div {...getTableProps()}>
      <div>
        {headerGroups.map((headerGroup) => (
          <div {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column, i) => (
              <TableHead getStyles={getStyles} key={i} column={column} />
            ))}
          </div>
        ))}
      </div>
      <div {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return <TableRow key={i} row={row} getStyles={getStyles}></TableRow>;
        })}
      </div>
    </div>
  );
};

export default Table;
