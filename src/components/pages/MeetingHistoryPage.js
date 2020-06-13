import React, {useEffect} from 'react';
import TableTemplate from 'components/templates/TableTemplate';
import TableList from 'components/organisms/TableList';
import {withRouter} from 'react-router-dom';
import {getMeetingHistory as fetchMeetsAction} from 'selectors/FetchMeets';
import {connect} from 'react-redux';

const HistoryPage = ({meetingHistoryReducer, getMeetingHistory}) => {
  const {pending, meetings, error} = meetingHistoryReducer;
  useEffect(() => {
    getMeetingHistory();
  }, []);

  return (
    <TableTemplate title="Historia Spotkań">
      <TableList meetingsList={meetings} />
    </TableTemplate>
  );
};

const mapStateToProps = ({meetingHistoryReducer}) => ({
  meetingHistoryReducer,
});

const mapDispatchToProps = dispatch => ({
  getMeetingHistory: () => dispatch(fetchMeetsAction()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HistoryPage));