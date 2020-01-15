import React, { useEffect } from 'react';
import TableTemplate from 'components/templates/TableTemplate';
import TableList from 'components/organisms/TableList';

import { fetchMeets as fetchMeetsAction } from 'selectors/FetchMeets';
import { connect } from 'react-redux';

const TimetablePage = ({ schedules, fetchMeets }) => {
    useEffect(() => {
        fetchMeets()
    }, []);

    return (
        <TableTemplate>
            {/* <TableList data={meetings} /> */}
            {/* {meetings.map(() => <div>hehe</div>)} */}
        </TableTemplate>
    );
};

const mapStateToProps = ({ schedules }) => ({
    schedules,
});

const mapDispatchToProps = dispatch => ({
    fetchMeets: () => dispatch(fetchMeetsAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TimetablePage);