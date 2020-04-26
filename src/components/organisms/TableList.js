import React from 'react';
import styled from 'styled-components';
import TableListMenu from 'components/molecules/TableListMenu';
import TableElement from 'components/molecules/TableElement';

const StyledTableWrapper = styled.table`
  flex-direction: column;
  table-layout: fixed;
  border-collapse: collapse;
  font-size: 1.6rem;
  font-weight: bold;
`;

const StyledTableBody = styled.tbody``;

const TableList = ({meetingsList}) => {

  return (
    <StyledTableWrapper>
      <TableListMenu />
      <StyledTableBody>
        {meetingsList &&
          meetingsList !== undefined &&
          meetingsList.map(meetingData => <TableElement key={meetingData.id} meetingData={meetingData} />)}
      </StyledTableBody>
    </StyledTableWrapper>
  );
};

export default TableList;
