import React, {useEffect} from 'react';
import TableTemplate from 'components/templates/TableTemplate';
import TableList from 'components/organisms/TableList';
import {fetchMeets as fetchMeetsAction} from 'selectors/FetchMeets';
import {connect} from 'react-redux';

const TimetablePage = ({schedules, fetchMeets}) => {
  console.log(schedules);
  useEffect(() => {
    fetchMeets();
  }, [fetchMeets]);

  return (
    <TableTemplate>
      <TableList meetingsList={schedules.meetings} />
    </TableTemplate>
  );
};

const mapStateToProps = ({schedules}) => ({
  schedules,
});

const fetchParameters = {
  methodType: 'GET',
  requestDataType: 'meetings',
  generalAttribute: '',
  specyficAttribute: '',
};

const mapDispatchToProps = dispatch => ({
  fetchMeets: () => dispatch(fetchMeetsAction('schedules', fetchParameters)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TimetablePage);
