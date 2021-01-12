import {MeetingHistoryTableElement} from 'components/molecules/TableElement';
import TableList from 'components/organisms/TableList';
import {MeetingHistoryTableMenu} from 'components/organisms/TableMenu';
import TableTemplate from 'components/templates/TableTemplate';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {getMeetingsHistory} from 'selectors/fetchMeetingHistory';

const HistoryPage = () => {
  const dispatch = useDispatch();
  const getMeetingsHistoryAction = () => dispatch(getMeetingsHistory());
  const {pending, meetings, error} = useSelector((state) => state.meetingHistory);

  useEffect(() => {
    getMeetingsHistoryAction();
  }, []);

  return (
    <TableTemplate title="Historia Spotkań">
      <MeetingHistoryTableMenu />
      <TableList meetingsList={meetings}>
        <MeetingHistoryTableElement />
      </TableList>
    </TableTemplate>
  );
};

export default withRouter(HistoryPage);
