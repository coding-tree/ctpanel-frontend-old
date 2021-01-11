import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {getSchedule} from 'selectors/fetchSchedule';
import {withRouter} from 'react-router-dom';
import Table from 'components/organisms/Table';
import TableTemplate from 'components/templates/TableTemplate';
import IndeterminateCheckbox from 'components/atoms/IndeterminateCheckbox';

const TimetablePage = () => {
  const dispatch = useDispatch();
  const getScheduleAction = () => dispatch(getSchedule());
  const {pending, meetings, error} = useSelector((state) => state.schedule);

  useEffect(() => {
    getScheduleAction();
  }, []);
  console.log(meetings);

  const columns = React.useMemo(
    () => [
      {
        id: 'selection',
        width: 30,
        align: 'right',
        Header: () => null,
        Cell: ({row}) => <IndeterminateCheckbox toggleRowSelected={row.toggleRowSelected} {...row.getToggleRowSelectedProps()} />,
        width: 30,
        alignItems: 'stretch',
        justifyContent: 'right',
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
          return r.value.toLocaleString('pl');
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
