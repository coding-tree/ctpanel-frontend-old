import React from 'react';
import {withRouter} from 'react-router';
import styled from 'styled-components';
import Header from 'components/atoms/Header';
import TableMenu from 'components/organisms/TableMenu';
import variables from 'settings/variables';

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

const StyledWrapper = styled.div`
  min-height: 100%;
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
  padding: 2.8rem 2.2rem;
  border-radius: 30px;
  box-shadow: 0 0 10px ${variables.boxShadowColor};
  background: #ffffff;
`;
