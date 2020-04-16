import React, {useEffect} from 'react';
import TableTemplate from 'components/templates/TableTemplate';
import {withRouter} from 'react-router-dom';

const HistoryPage = ({history, location}) => {
  return (
    <TableTemplate>
      <h1>HistoryPage</h1>
    </TableTemplate>
  );
};

export default withRouter(HistoryPage);
