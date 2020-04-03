import React, {useState, useEffect} from 'react';
import TableTemplate from 'components/templates/TableTemplate';
import ListOfElements from 'components/organisms/TableList';
import {withRouter} from 'react-router-dom';
//Tutaj będzie pobierany content i przekazywany dalej.

const TopicDatabasePage = ({history, location}) => {
  return (
    <TableTemplate>
      <ListOfElements />
    </TableTemplate>
  );
};

export default withRouter(TopicDatabasePage);
