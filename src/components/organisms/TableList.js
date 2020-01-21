import React from 'react';
import styled from 'styled-components';
import TableListMenu from 'components/molecules/TableListMenu';
import TableElement from 'components/molecules/TableElement';

const StyledWrapper = styled.div`
    flex-direction: column;
`;

const TableList = ({ meetingsList }) => {
    return (
        <StyledWrapper>
            <TableListMenu />
            {meetingsList.map(meetingData => <TableElement meetingData={meetingData} />)}
        </StyledWrapper>
    );
};

export default TableList;