import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  height: 75px;
`;

const TableMenu = ({ actuallyLocation }) => {
    const schedules = '/harmonogram';
    const topicDatabase = '/baza-tematow';
    const meetingHistory = '/historia-spotkan';

    return (
        <StyledWrapper>
            {/* {actuallyLocation === schedules && (
                <>
                    <button>DODAJ +</button>
                    <input type="text" />
                </>
            )}
            {actuallyLocation === topicDatabase && (
                <button>DODAJ +</button>
            )}
            {actuallyLocation === meetingHistory && (
                <>
                    <span>data</span>
                    <select>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                    <select>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                    <input type="text" />
                </>
            )} */}
        </StyledWrapper>
    )
};

export default TableMenu;