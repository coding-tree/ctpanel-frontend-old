import React from 'react';
import {withRouter} from 'react-router';
import styled from 'styled-components';
import Header from 'components/atoms/Header';
import TableMenu from 'components/organisms/TableMenu';

const StyledWrapper = styled.div`
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledTableContainer = styled.div`
  width: 80%;
  max-width: 1400px;
  flex-direction: column;
`;

const StyledTable = styled.div`
  flex-direction: column;

  padding: 20px;
  border-radius: 30px;
  box-shadow: 0px 0px 70px 5px rgba(0, 0, 0, 0.06);
  background: #ffffff;
`;

const TableTemplate = ({location, children}) => {
  const actuallyLocation = location.pathname
    .slice(1)
    .split('-')
    .join(' ')
    .toUpperCase();

  return (
    <StyledWrapper>
      <StyledTableContainer>
        <Header tableTitle>{actuallyLocation}</Header>
        <StyledTable>
          <TableMenu actuallyLocation={actuallyLocation} />
          {children}
        </StyledTable>
      </StyledTableContainer>
    </StyledWrapper>
  );
};

export default withRouter(TableTemplate);
