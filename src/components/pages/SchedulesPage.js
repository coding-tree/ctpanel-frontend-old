import React, {useEffect} from 'react';
import TableTemplate from 'components/templates/TableTemplate';
import TableList from 'components/organisms/TableList';
import {fetchMeetingHistory as fetchMeetsAction} from 'selectors/FetchMeets';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';

let daysLimit = 5;

const TimetablePage = ({scheduleReducer, fetchMeets}) => {
  const {pending, meetings, error} = scheduleReducer;
  useEffect(() => {
    fetchMeets();
  }, [fetchMeets]);

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

// const fetchParameters = {
//   methodType: 'GET',
//   requestDataType: 'schedule',
//   generalAttribute: 'meetings',
//   specificAttribute: 'schedule',
//   limit: daysLimit,
// };

const mapDispatchToProps = dispatch => ({
  fetchMeets: () => dispatch(fetchMeetsAction()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TimetablePage));
