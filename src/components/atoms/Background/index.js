import styled from 'styled-components';

const StyledBackground = styled.div`
  background-image: url('/background.png');
  mix-blend-mode: multiply;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
`;

export default StyledBackground;
