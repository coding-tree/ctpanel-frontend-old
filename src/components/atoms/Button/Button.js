import styled, {css} from 'styled-components';
import variables from 'settings/variables';

const Button = styled.button`
  justify-content: center;
  align-items: center;
  width: fit-content;
  border-radius: 4px;
  cursor: pointer;
  border: 2px solid ${variables.colorMain};
  transition: 0.3s;
  width: ${({width}) => width && width};
  height: ${({height}) => height && height};
  font-family: ${variables.mainFont};
  text-transform: ${({uppercase}) => uppercase && 'uppercase'};

  ${({meetVote}) => meetVote &&
  css`
    width: 42px;
    height: 42px;
    border: none;
    color: #ffffff;
    font-size: 20px;
    font-weight: 900;
    ${({meetVoteUp}) => meetVoteUp && css`background-color: #009640;`}  
    ${({meetVoteDown}) => meetVoteDown && css`background-color: #E53D00;`}  
  `}

  
  &:hover {
    transition: 0.3s;
    color: ${variables.colorMain};
  }
  ${({standard}) =>
    standard &&
    css`
      width: 144px;
      height: 42px;
    `}
  ${({primary}) =>
    primary &&
    css`
    font-size: 1.6rem;
    font-weight: bold;
    
    color: ${variables.colorWhite}
    background-color: ${variables.colorMain};
    &:hover {
      color: ${variables.colorMain};
      background-color: ${variables.colorWhite}
    }
  `}
`;

export default Button;
