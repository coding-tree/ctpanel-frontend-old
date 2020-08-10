import React from 'react';
import {withRouter} from 'react-router';
import styled from 'styled-components';
import Header from 'components/atoms/Header';
import TableMenu from 'components/organisms/TableMenu';
import variables from 'settings/variables';
import {SelectedElementProvider} from 'components/context/SelectedElementContext';

const StyledWrapper = styled.div`
  grid-area: body;
  height: 100%;
  align-items: center;
  flex-direction: column;
  padding-bottom: 10rem;

  @media only screen and (max-width: ${variables.bpDesktop}) {
    padding-bottom: 5rem;
  }
`;

const StyledTableContainer = styled.div`
  width: 80%;
  max-width: 1400px;
  flex-direction: column;

  @media only screen and (max-width: ${variables.bpLargeDesktop}) {
    width: 90%;
  }
`;

const StyledTable = styled.div`
  flex-direction: column;
  padding: 2.8rem 2.2rem;
  border-radius: 30px;
  box-shadow: 0 0 10px ${variables.boxShadowColor};
  background: ${variables.colorWhite};
`;

const TableTemplate = ({children, title}) => {
  return (
    <StyledWrapper>
      <StyledTableContainer>
        <Header tableTitle>{title}</Header>
        <SelectedElementProvider>
          <StyledTable>
            <TableMenu />
            {children}
          </StyledTable>
        </SelectedElementProvider>
      </StyledTableContainer>
    </StyledWrapper>
  );
};

export default withRouter(TableTemplate);
