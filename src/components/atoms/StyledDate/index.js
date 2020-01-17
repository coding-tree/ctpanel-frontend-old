import React from 'react';
import styled, {css} from 'styled-components';
import moment from 'moment';
import 'moment/locale/pl';

const StyledDate = styled.div`
  font-size: ${props => (props.fontSize ? props.fontSize : '1.6rem')};
  font-weight: bold;
  ${props =>
    props.right &&
    css`
      position: absolute;
      right: 0;
    `}
`;

const DateAtom = ({date, format, children, fontSize, right}) => {
  const timestamp = new Date(date * 1000);
  const formatted = moment(timestamp).format(format);

  return (
    <StyledDate right={right} fontSize={fontSize}>
      {formatted}
      {children}
    </StyledDate>
  );
};

export default DateAtom;
