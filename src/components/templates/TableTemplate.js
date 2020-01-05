import React from 'react';
import { withRouter } from 'react-router';
import styled from 'styled-components';
import Header from 'components/atoms/Header/Header';
import TableMenu from 'components/organisms/TableMenu';

const StyledWrapper = styled.div`
  
`;

const StyledContainer = styled.div`
  
`;

const TableTemplate = ({ location, children }) => {
    const actuallyLocation = location.pathname;
    const schedules = '/harmonogram';
    const topicDatabase = '/baza-tematow';
    const meetingHistory = '/historia-spotkan';

    return (
        <StyledWrapper>
            <Header>
                {actuallyLocation === schedules && "HARMONOGRAM"}
                {actuallyLocation === topicDatabase && "BAZA TEMATÓW"}
                {actuallyLocation === meetingHistory && "HISTORIA SPOTKAŃ"}
            </Header>
            <StyledContainer>
                <TableMenu actuallyLocation={actuallyLocation} />
                {children}
            </StyledContainer>
        </StyledWrapper>
    )
}

export default withRouter(TableTemplate);