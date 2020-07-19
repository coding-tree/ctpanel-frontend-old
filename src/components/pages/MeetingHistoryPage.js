import React, {useEffect} from 'react';
import TableTemplate from 'components/templates/TableTemplate';
import TableList from 'components/organisms/TableList';
import {withRouter} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getMeetingsHistory as getMeetingsHistoryAction } from 'selectors/fetchMeetingHistory';

const HistoryPage = (f) => {
  const dispatch = useDispatch();
  const getMeetingsHistory = () => dispatch(getMeetingsHistoryAction());
  const {pending, meetings, error} = useSelector(state => state.meetingHistory);

  useEffect(() => {
    getMeetingsHistory();
  }, []);

  return (
    <TableTemplate title="Historia Spotkań">
      <TableList meetingsList={meetings} />
    </TableTemplate>
  );
};

export default withRouter(HistoryPage);