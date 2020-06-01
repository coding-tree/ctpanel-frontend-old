import React, {useEffect} from 'react';
import TableTemplate from 'components/templates/TableTemplate';
import TableList from 'components/organisms/TableList';
import {withRouter} from 'react-router-dom';
import {fetchMeets as fetchMeetsAction} from 'selectors/FetchMeets';
import {connect} from 'react-redux';

const HistoryPage = ({archive, fetchMeets}) => {
  useEffect(() => {
    fetchMeets();
  }, []);

  return (
    <TableTemplate title="Historia Spotkań">
      <TableList meetingsList={archive.meetings} />
    </TableTemplate>
  );
};

const mapStateToProps = ({archive}) => ({
  archive,
});

const fetchParameters = {
  methodType: 'GET',
  requestDataType: 'archive',
  generalAttribute: 'meetings',
  specificAttribute: '',
};

const mapDispatchToProps = dispatch => ({
  fetchMeets: () => dispatch(fetchMeetsAction(fetchParameters)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HistoryPage));
