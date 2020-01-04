import React from 'react';
import MainTemplate from 'templates/MainTemplate';
import Header from 'atoms/Header';
import TableMenu from 'organisms/TableMenu';
import TableList from 'organisms/TableList';

//mapStateToProps, z tamtąd pobieram meetingHistory5
const TimetablePage = ({ meetingHistory }) => (
    <MainTemplate tableHeader={<Header />} tableMenu={<TableMenu />}>
        <TableList meetingHistory={meetingHistory} />
    </MainTemplate>
);

export default TimetablePage;