import {TopicDataBaseTableElement} from 'components/molecules/TableElement';
import TableList from 'components/organisms/TableList';
import {TopicDataBaseTableMenu} from 'components/organisms/TableMenu';
import TableTemplate from 'components/templates/TableTemplate';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import {getTopics} from 'selectors/fetchTopics';

const TopicDatabasePage = () => {
  const dispatch = useDispatch();
  const getTopicsAction = () => dispatch(getTopics());
  const {pending, meetings, error} = useSelector((state) => state.topics);

  useEffect(() => {
    getTopicsAction();
  }, []);

  return (
    <TableTemplate title="Baza Tematów">
      <TopicDataBaseTableMenu />
      <TableList meetingsList={meetings.results}>
        <TopicDataBaseTableElement />
      </TableList>
      <ToastContainer></ToastContainer>
    </TableTemplate>
  );
};

export default withRouter(TopicDatabasePage);
