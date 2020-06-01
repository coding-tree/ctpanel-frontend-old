import React, {useEffect} from 'react';
import TableTemplate from 'components/templates/TableTemplate';
import TableList from 'components/organisms/TableList';
import {fetchMeets as fetchMeetsAction} from 'selectors/FetchMeets';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';

const TimetablePage = ({meetings, fetchMeets}) => {
  useEffect(() => {
    fetchMeets();
  }, [fetchMeets]);

  return (
    <TableTemplate title="Harmonogram Spotkań">
      <TableList meetingsList={meetings.meetings.results} />
      <ToastContainer></ToastContainer>
    </TableTemplate>
  );
};

const mapStateToProps = ({meetings}) => ({
  meetings,
});

const fetchParameters = {
  methodType: 'GET',
  requestDataType: 'meetings',
  generalAttribute: '',
  specificAttribute: '',
};

const mapDispatchToProps = dispatch => ({
  fetchMeets: () => dispatch(fetchMeetsAction(fetchParameters)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TimetablePage));
