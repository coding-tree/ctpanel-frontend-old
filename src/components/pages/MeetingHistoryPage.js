import React, {useEffect} from 'react';
import TableTemplate from 'components/templates/TableTemplate';
import TableList from 'components/organisms/TableList';
import {withRouter} from 'react-router-dom';
import {getMeetingsHistory as getMeetingsHistoryAction} from 'selectors/FetchMeets';
import {connect} from 'react-redux';

const HistoryPage = ({meetingHistoryReducer, getMeetingsHistory}) => {
  const {pending, meetings, error} = meetingHistoryReducer;
  useEffect(() => {
    getMeetingsHistory();
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
  getMeetingsHistory: () => dispatch(getMeetingsHistoryAction()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HistoryPage));