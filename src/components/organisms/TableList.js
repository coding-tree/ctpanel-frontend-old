import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import TableListMenu from 'components/molecules/TableListMenu';
import TableElement from 'components/molecules/TableElement';
import axios from 'axios';

const StyledTableWrapper = styled.table`
  flex-direction: column;
  table-layout: fixed;
  border-collapse: collapse;
  font-size: 1.6rem;
  font-weight: bold;
`;

const StyledTableBody = styled.tbody``;

const TableList = ({meetingsList}) => {
  const [userId, setUserId] = useState(null);
  useEffect(() => {
    const url = `${process.env.REACT_APP_SERVER_URL}/user`;
    axios
      .get(url, {withCredentials: true})
      .then(res => setUserId(res.data.id))
      .catch(err => console.log(err));
  }, []);

  return (
    <StyledTableWrapper>
      <TableListMenu meetingsList={meetingsList} />
      <StyledTableBody>
        {meetingsList && meetingsList.map((meetingData, index) => <TableElement userId={userId} meetingData={meetingData} index={index + 1} key={index} />)}
      </StyledTableBody>
    </StyledTableWrapper>
  );
};

export default TableList;
