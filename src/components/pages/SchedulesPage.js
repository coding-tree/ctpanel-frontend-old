import React, {useEffect} from 'react';
import TableTemplate from 'components/templates/TableTemplate';
import TableList from 'components/organisms/TableList';
import {getSchedule as getScheduleAction} from 'selectors/FetchMeets';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';

let daysLimit = 5;

const TimetablePage = ({scheduleReducer, getSchedule}) => {
  const {pending, meetings, error} = scheduleReducer;
  useEffect(() => {
    getSchedule();
  }, [getSchedule]);

  return (
    <TableTemplate title="Harmonogram Spotkań">
      <TableList meetingsList={meetings} />
      <ToastContainer></ToastContainer>
    </TableTemplate>
  );
};

const mapStateToProps = ({scheduleReducer}) => ({
  scheduleReducer
});

const mapDispatchToProps = dispatch => ({
  getSchedule: () => dispatch(getScheduleAction()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TimetablePage));