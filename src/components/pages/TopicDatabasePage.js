import React, {useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import {fetchMeets as fetchMeetsAction} from 'selectors/FetchMeets';
import {connect} from 'react-redux';
import TableTemplate from 'components/templates/TableTemplate';
import TableList from 'components/organisms/TableList';
import {ToastContainer} from 'react-toastify';

const TopicDatabasePage = ({topics, fetchMeets}) => {
  useEffect(() => {
    fetchMeets();
  }, [fetchMeets]);

  return (
    <TableTemplate title="Baza Tematów">
      <TableList meetingsList={topics.meetings.results} />
      <ToastContainer></ToastContainer>
    </TableTemplate>
  );
};

const mapStateToProps = ({topics}) => ({
  topics,
});

const fetchParameters = {
  methodType: 'GET',
  requestDataType: 'topics',
  generalAttribute: '',
  specyficAttribute: '',
};

const mapDispatchToProps = dispatch => ({
  fetchMeets: () => dispatch(fetchMeetsAction(fetchParameters)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TopicDatabasePage));
