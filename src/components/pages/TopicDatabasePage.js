import React, {useEffect} from 'react';
import TableTemplate from 'components/templates/TableTemplate';
import ListOfElements from 'components/organisms/TableList';
//Tutaj będzie pobierany content i przekazywany dalej.

const TopicDatabasePage = () => {
  useEffect(() => {
    fetch('/topics')
      .then(resp => resp.json())
      .then(data => console.log(data));
  }, []);
  return (
    <TableTemplate>
      <ListOfElements />
    </TableTemplate>
  );
};

export default TopicDatabasePage;
