import React from 'react';

const DataLabel = ({date}) => {
  const timestamp = new Date(date * 1000);
  const formattedDate = new Intl.DateTimeFormat('pl-PL', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    weekday: 'long',
    hour: 'numeric',
    minute: 'numeric',
  }).format(timestamp);

  return <div>{formattedDate} - </div>;
};

export default DataLabel;
