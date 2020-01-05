import React from 'react';
import styled from 'styled-components';
import TableListMenu from 'components/molecules/TableListMenu';
import TableElement from 'components/molecules/TableElement';

const StyledWrapper = styled.div`

`;

const data = [
    {
        id: 129,
        date: "10 Listopad 2019",
        topic: "React - Zaawansowane techniki hook's",
        meetLeader: "Damian Ospara",
        materialLinks: "link",
    },
    {
        id: 130,
        date: "14 Listopad 2019",
        topic: "React - Podstawy testowania z JEST",
        meetLeader: "Jakub Wojtoń",
        materialLinks: "link",
    },
    {
        id: 131,
        date: "22 Listopad 2019",
        topic: "SEO - Na co zwrócić uwagę?",
        meetLeader: "Damian Ospara",
        materialLinks: "link",
    },
];

const TableList = () => {
    return (
        <StyledWrapper>
            <TableListMenu />
            {data.map(({ id, date, topic, meetLeader, materialLinks }) => (
                <TableElement key={id} id={id} date={date} topic={topic} meetLeader={meetLeader} materialLinks={materialLinks} />
            ))}
        </StyledWrapper>
    );
};

export default TableList;

