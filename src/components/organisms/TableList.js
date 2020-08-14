import React from 'react';
import styled from 'styled-components';
import TableListMenu from 'components/molecules/TableListMenu';
import TableElement from 'components/molecules/TableElement';

const StyledTableWrapper = styled.div`
  display: grid;
  word-break: break-word;
`;

const StyledTableBody = styled.div`
  display: grid;
  grid-auto-rows: minmax(0, max-content);
`;

const TableList = ({meetingsList, children}) => {
  return (
    <StyledTableWrapper>
      <TableListMenu meetingsList={meetingsList} />
      <StyledTableBody>
        {meetingsList &&
          meetingsList.map((meetingData, index) => (
            <TableElement meetingData={meetingData} index={index + 1} key={index}>
              {children}
            </TableElement>
          ))}
      </StyledTableBody>
    </StyledTableWrapper>
  );
};

export default TableList;
