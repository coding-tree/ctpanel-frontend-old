import React from 'react';
import MainTemplate from 'components/templates/MainTemplate';
import Header from 'components/atoms/header';
import TableMenu from 'organisms/TableMenu';
import TableList from 'organisms/TableList';

//mapStateToProps, z tamtąd pobieram meetingHistory5
const TimetablePage = ({ meetingHistory }) => (
    <MainTemplate tableHeader={<Header />} tableMenu={<TableMenu />}>
        <TableList meetingHistory={meetingHistory} />
    </MainTemplate>
);

export default TimetablePage;