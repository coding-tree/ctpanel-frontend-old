import React from 'react';
import { withRouter } from 'react-router';
import styled from 'styled-components';
import Header from 'components/atoms/Header';
import TableMenu from 'components/organisms/TableMenu';

const StyledWrapper = styled.div`
  
`;

const StyledTableContainer = styled.div`
  width: 100%;
`;

const TableTemplate = ({ location, children }) => {
    const actuallyLocation = location.pathname;
    const schedules = '/harmonogram';
    const topicDatabase = '/baza-tematow';
    const meetingHistory = '/historia-spotkan';

    return (
        <StyledWrapper>
            <Header>
                {/* {actuallyLocation === schedules && "HARMONOGRAM"}
                {actuallyLocation === topicDatabase && "BAZA TEMATÓW"}
                {actuallyLocation === meetingHistory && "HISTORIA SPOTKAŃ"} */}
            </Header>
            <StyledTableContainer>
                <TableMenu actuallyLocation={actuallyLocation} />
                {children}
            </StyledTableContainer>
        </StyledWrapper>
    )
}

export default withRouter(TableTemplate);