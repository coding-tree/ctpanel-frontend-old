import React from 'react';
import TableTemplate from 'components/templates/TableTemplate';
import TableList from 'components/organisms/TableList';
import {withRouter} from 'react-router-dom';

const HistoryPage = () => {
  return (
    <TableTemplate>
      <TableList meetingsList={[{}]} />
    </TableTemplate>
  );
};

export default withRouter(HistoryPage);