import styled, {css} from 'styled-components';
import variables from 'settings/variables';

const Text = styled.div`
  line-height: 1.7;
  font-size: 1.6rem;
  margin: ${(props) => (props.margin ? props.margin : 'initial')};
  text-align: justify;

  @media only screen and (max-width: ${variables.bpTablet}) {
    font-size: 1.4rem;
  }
  @media only screen and (max-width: ${variables.bpLargeMobile}) {
    font-size: 1.2rem;
  }

  ${(props) =>
    props.columnView &&
    css`
      display: block;
      columns: 3;
      column-gap: 4rem;
    `}
`;

export default Text;
