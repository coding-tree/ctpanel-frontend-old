import styled from 'styled-components';

const Button = styled.button`
  height: 42px;
  width: 144px;
  background-color: ${props => (props.primary ? 'green' : 'yellow')};
  color: ${props => (props.primary ? 'white' : 'black')};
  border-radius: ${props => (props.primary ? '10px' : '0')};
  margin: 20px;
`;

export default Button;
