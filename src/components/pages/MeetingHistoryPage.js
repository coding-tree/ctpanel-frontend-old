import React, {useEffect} from 'react';
import TableTemplate from 'components/templates/TableTemplate';
import TableList from 'components/organisms/TableList';
import {withRouter} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getMeetingsHistory } from 'selectors/fetchMeetingHistory';

const HistoryPage = () => {
  const dispatch = useDispatch();
  const getMeetingsHistoryAction = () => dispatch(getMeetingsHistory());
  const {pending, meetings, error} = useSelector(state => state.meetingHistory);

  useEffect(() => {
    getMeetingsHistoryAction();
  }, []);

  return (
    <TableTemplate title="Historia Spotkań">
      <TableList meetingsList={meetings} />
    </TableTemplate>
  );
};

export default withRouter(HistoryPage);