import React, {useEffect} from 'react';
import TableTemplate from 'components/templates/TableTemplate';
import TableList from 'components/organisms/TableList';
import {fetchMeets as fetchMeetsAction} from 'selectors/FetchMeets';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';

const TimetablePage = ({schedule, fetchMeets}) => {
  useEffect(() => {
    fetchMeets();
  }, [fetchMeets]);

  return (
    <TableTemplate title="Harmonogram Spotkań">
      <TableList meetingsList={schedule.meetings} />
      <ToastContainer></ToastContainer>
    </TableTemplate>
  );
};

const mapStateToProps = ({schedule}) => ({
  schedule,
});

const fetchParameters = {
  methodType: 'GET',
  requestDataType: 'schedule',
  generalAttribute: 'meetings',
  specificAttribute: 'schedule',
};

const mapDispatchToProps = dispatch => ({
  fetchMeets: () => dispatch(fetchMeetsAction(fetchParameters)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TimetablePage));
