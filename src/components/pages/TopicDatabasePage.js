import React from 'react';
import TableTemplate from 'components/templates/TableTemplate';
import ListOfElements from 'components/organisms/TableList';
//Tutaj będzie pobierany content i przekazywany dalej.

const TopicDatabasePage = () => (
    <TableTemplate>
        <ListOfElements />
    </TableTemplate>
);

export default TopicDatabasePage;