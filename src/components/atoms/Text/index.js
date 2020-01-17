import styled, {css} from 'styled-components';

const Text = styled.div`
  line-height: 2.4rem;
  font-size: 1.6rem;
  margin: ${props => (props.margin ? props.margin : 'initial')};
  ${props =>
    props.columnView &&
    css`
      display: block;
      columns: 3;
      column-gap: 4rem;
      text-align: justify;
    `}
`;

export default Text;
