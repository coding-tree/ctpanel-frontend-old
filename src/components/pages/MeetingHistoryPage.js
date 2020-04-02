import React, {useEffect} from 'react';
import TableTemplate from 'components/templates/TableTemplate';
import {withRouter} from 'react-router-dom';

const HistoryPage = ({history, location}) => {
  useEffect(() => {
    fetch('/user')
      .then(resp => resp.json())
      .then(data => console.log(data))
      .catch(err => {
        history.push('/login');
        console.log(err);
      });
  });

  return (
    <TableTemplate>
      <h1>HistoryPage</h1>
    </TableTemplate>
  );
};

export default withRouter(HistoryPage);
