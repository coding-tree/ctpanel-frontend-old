import React, { useEffect } from 'react';
import TableTemplate from 'components/templates/TableTemplate';
import TableList from 'components/organisms/TableList';

import { fetchMeets as fetchMeetsAction } from 'selectors/FetchMeets';
import { connect } from 'react-redux';

const TimetablePage = ({ schedules, fetchMeets }) => {
    useEffect(() => {
        fetchMeets()
    }, []);

    const meetings = [
        {
            usefulLinks: [

            ],
            _id: "5e19a607d4fe5656ac7a9952",
            date: 2548743984263,
            topic: "Tajemniki fetch'a",
            leader: "Paweł Wojtkiewicz",
            duration: 324234,
            resourcesURL: "REW",
            __v: 0
        }
    ];

    return (
        <TableTemplate>
            <TableList data={meetings} />
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