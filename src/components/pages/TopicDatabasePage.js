import React, {useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getTopics } from 'selectors/fetchTopics';

import TableTemplate from 'components/templates/TableTemplate';
import TableList from 'components/organisms/TableList';
import {ToastContainer} from 'react-toastify';

const TopicDatabasePage = () => {
  const dispatch = useDispatch();
  const getTopicsAction = () => dispatch(getTopics());
  const {pending, meetings, error} = useSelector(state => state.topics);

  useEffect(() => {
    getTopicsAction();
  }, []);

  return (
    <TableTemplate title="Baza Tematów">
      <TableList meetingsList={meetings.results} />
      <ToastContainer></ToastContainer>
    </TableTemplate>
  );
};

export default withRouter(TopicDatabasePage);