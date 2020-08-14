import React, {useEffect} from 'react';
import TableTemplate from 'components/templates/TableTemplate';
import {MeetingHistoryTableMenu} from 'components/organisms/TableMenu';
import TableList from 'components/organisms/TableList';
import {withRouter} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {getMeetingsHistory} from 'selectors/fetchMeetingHistory';
import {MeetingHistoryTableElement} from 'components/molecules/TableElement';

const HistoryPage = () => {
  const dispatch = useDispatch();
  const getMeetingsHistoryAction = () => dispatch(getMeetingsHistory());
  const {pending, meetings, error} = useSelector(state => state.meetingHistory);

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
