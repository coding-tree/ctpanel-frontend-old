import React from 'react';
import { withRouter } from 'react-router';
import styled from 'styled-components';
import Header from 'components/atoms/Header';
import TableMenu from 'components/organisms/TableMenu';

const StyledWrapper = styled.div`
  padding: 75px 100px 0 100px;
`;

const StyledTableContainer = styled.div`
    flex-direction: column;
    width: 100%;
    height: 500px;
    padding: 20px;
    border-radius: 30px;
    box-shadow: 0px 0px 70px 5px rgba(0,0,0,0.06); 
    background: #ffffff;
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