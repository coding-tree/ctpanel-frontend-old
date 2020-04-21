import React, {useEffect} from 'react';
import TableTemplate from 'components/templates/TableTemplate';
import TableList from 'components/organisms/TableList';
import {withRouter} from 'react-router-dom';

const TopicDatabasePage = () => {
  useEffect(() => {
    fetch('/topics')
      .then((resp) => resp.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <TableTemplate>
      <TableList meetingsList={[{}]} />
    </TableTemplate>
  );
};

export default withRouter(TopicDatabasePage);