import React, {useEffect} from 'react';
import TableTemplate from 'components/templates/TableTemplate';
import TableList from 'components/organisms/TableList';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getSchedule as getScheduleAction } from 'selectors/fetchSchedule';
import {withRouter} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';

let daysLimit = 5;

const TimetablePage = () => {
  const dispatch = useDispatch();
  const getSchedule = () => dispatch(getScheduleAction());
  const {pending, meetings, error} = useSelector(state => state.schedule);
  console.log(pending, meetings, error);
  
  useEffect(() => {
    getSchedule();
  }, []);

  return (
    // meetings
    //   ?
    //   <TableTemplate title="Harmonogram Spotkań">
    //     <TableList meetingsList={meetings} />
    //     <ToastContainer></ToastContainer>
    //   </TableTemplate>
    //   : "ooo"
    "dupa"
  
  );
};

export default TimetablePage;