import styled, {css} from 'styled-components';

const Text = styled.div`
  line-height: 2.4rem;
  font-size: 1.6rem;
  margin: ${props => (props.margin ? props.margin : 'initial')};
  text-align: justify;
  ${props =>
    props.columnView &&
    css`
      display: block;
      columns: 3;
      column-gap: 4rem;
    `}
`;

export default Text;
