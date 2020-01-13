import React from 'react';
import styled from 'styled-components';
import TableListMenu from 'components/molecules/TableListMenu';
import TableElement from 'components/molecules/TableElement';

import { connect } from 'react-redux';
import { testing as testingAction } from 'actions';

const StyledWrapper = styled.div`

`;


const TableList = ({ aaa }) => {
    //console.log(notes)

    console.log(aaa)
    return (
        <StyledWrapper>
            {/* <button onClick={() => testing("Kliknąłem")}>Button</button> */}

        </StyledWrapper>
    );
};

const mapStateToProps = ({ aaa }) => ({
    aaa,
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(TableList)