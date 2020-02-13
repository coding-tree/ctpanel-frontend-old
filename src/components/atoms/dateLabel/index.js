import React from 'react';

const DataLabel = ({date, table}) => {
  const timestamp = new Date().setMilliseconds(date);
  const defaultFormat = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    weekday: 'long',
    hour: 'numeric',
    minute: 'numeric',
  };
  const tableFormat = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const formattedDate = new Intl.DateTimeFormat('pl-PL', defaultFormat).format(timestamp);
  const formattedTableDate = new Intl.DateTimeFormat('pl-PL', tableFormat).format(timestamp);

  return <div> {table ? formattedTableDate : `${formattedDate} - `}</div>;
};

export default DataLabel;
