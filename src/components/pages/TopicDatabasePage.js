import React, {useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import {fetchMeets as fetchMeetsAction} from 'selectors/FetchMeets';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import TableTemplate from 'components/templates/TableTemplate';
import TableList from 'components/organisms/TableList';


const TopicDatabasePage = ({topicDatabases, fetchMeets}) => {
  useEffect(() => {
    fetchMeets();
  }, [fetchMeets]);

  // useEffect(() => {
  //   fetch('/topics')
  //     .then((resp) => resp.json())
  //     .then((data) => console.log(data));
  // }, []);
  return (
    <TableTemplate>
      <TableList topicDatabases={topicDatabases.meetings.results} />
    </TableTemplate>
  );
};

const mapStateToProps = ({topicDatabases}) => ({
  topicDatabases,
});

const fetchParameters = {
  methodType: 'GET',
  requestDataType: 'topicDatabases',
  generalAttribute: '',
  specyficAttribute: '',
};

const mapDispatchToProps = dispatch => ({
  fetchMeets: () => dispatch(fetchMeetsAction('schedules', fetchParameters)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TopicDatabasePage));