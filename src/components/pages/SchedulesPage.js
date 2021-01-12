import IndeterminateCheckbox from 'components/atoms/IndeterminateCheckbox';
import Table from 'components/organisms/Table';
import TableTemplate from 'components/templates/TableTemplate';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {getSchedule} from 'selectors/fetchSchedule';

const TimetablePage = () => {
  const dispatch = useDispatch();
  const getScheduleAction = () => dispatch(getSchedule());
  const {pending, meetings, error} = useSelector((state) => state.schedule);

  useEffect(() => {
    getScheduleAction();
  }, []);

  const columns = React.useMemo(
    () => [
      {
        id: 'selection',
        width: 25,
        Header: ({getToggleAllRowsSelectedProps, toggleAllRowsSelected}) => (
          <IndeterminateCheckbox toggleRowSelected={toggleAllRowsSelected} {...getToggleAllRowsSelectedProps()} />
        ),
        Cell: ({row}) => <IndeterminateCheckbox toggleRowSelected={row.toggleRowSelected} {...row.getToggleRowSelectedProps()} />,
        justifyContent: 'center',
        rowClassNames: 'no-padding',
        disableSortBy: true,
        disableFilters: true,
        disableRenderingOnSubRow: true,
        hideOnGridView: true,
      },
      {
        id: 'date',
        Header: 'Data',
        accessor: (r) => new Date(r['date']),
        Cell: (r) => {
          return r.value.toLocaleString('pl', {hour12: true});
        },
        width: 150,
      },
      {
        id: 'topic',
        Header: 'Temat',
        accessor: 'topic',
        width: 200,
      },
      {
        id: 'duration',
        Header: 'Czas trwania',
        accessor: 'duration',
        width: 100,
      },
      {
        id: 'leader',
        Header: 'Prowadzący',
        accessor: 'leader',
        width: 200,
      },
    ],
    []
  );

  return (
    <TableTemplate title="Harmonogram">
      <Table data={meetings} columns={columns}></Table>
    </TableTemplate>
  );
};

export default withRouter(TimetablePage);
