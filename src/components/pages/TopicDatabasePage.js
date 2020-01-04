import React from 'react';
import TableTemplate from 'templates/TableTemplate';
import ListOfElements from 'organism/TableList';
//Tutaj będzie pobierany content i przekazywany dalej.

const TopicDatabasePage = () => (
    <TableTemplate>
        <ListOfElements />
    </TableTemplate>
);

export default TopicDatabasePage;