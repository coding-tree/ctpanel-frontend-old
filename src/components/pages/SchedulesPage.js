import React, {useEffect} from 'react';
import TableTemplate from 'components/templates/TableTemplate';
import TableList from 'components/organisms/TableList';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {getSchedule} from 'selectors/fetchSchedule';
import {withRouter} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import {SchedulesTableMenu} from 'components/organisms/TableMenu';

let daysLimit = 5;

const TimetablePage = () => {
  const dispatch = useDispatch();
  const getScheduleAction = () => dispatch(getSchedule());
  const {pending, meetings, error} = useSelector(state => state.schedule);

  useEffect(() => {
    getScheduleAction();
  }, []);

  return (
    <TableTemplate title="Harmonogram Spotkań">
      <SchedulesTableMenu />
      <TableList meetingsList={meetings} />
      <ToastContainer></ToastContainer>
    </TableTemplate>
  );
};

export default withRouter(TimetablePage);
