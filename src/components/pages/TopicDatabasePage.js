import React, {useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import {getTopics as getTopicsAction} from 'selectors/FetchMeets';
import {connect} from 'react-redux';
import TableTemplate from 'components/templates/TableTemplate';
import TableList from 'components/organisms/TableList';
import {ToastContainer} from 'react-toastify';

const TopicDatabasePage = ({topicsReducer, getTopics}) => {
  const {pending, meetings, error} = topicsReducer;
  useEffect(() => {
    getTopics();
  }, [getTopics]);

  return (
    <TableTemplate title="Baza Tematów">
      <TableList meetingsList={meetings.results} />
      <ToastContainer></ToastContainer>
    </TableTemplate>
  );
};

const mapStateToProps = ({topicsReducer}) => ({
  topicsReducer,
});

const mapDispatchToProps = dispatch => ({
  getTopics: () => dispatch(getTopicsAction()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TopicDatabasePage));