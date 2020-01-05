import React from 'react';
import TableTemplate from 'components/templates/TableTemplate';
import TableList from 'components/organisms/TableList';

//mapStateToProps, z tamtąd pobieram meetingHistory
// const TimetablePage = ({ meetingHistory }) => (
//     <MainTemplate tableHeader={<Header />} tableMenu={<TableMenu />}>
//         <TableList meetingHistory={meetingHistory} />
//     </MainTemplate>
// );

const TimetablePage = () => (
    <TableTemplate>
        <TableList />
    </TableTemplate>
);

export default TimetablePage;