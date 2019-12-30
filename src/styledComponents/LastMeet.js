import styled from 'styled-components';
import variables from 'settings/variables';

export const LastMeetWrapper = styled.div`
  position: relative;
  width: 80%;
  max-width: 1400px;
  padding: 7rem 5rem;
  background-color: ${variables.colorWhite};
  flex-direction: column;
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 50px;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 7rem;
`;

export const StyledHeader = styled.h2`
  font-size: 2rem;
  text-transform: uppercase;
`;

export const TitleWrapper = styled.h1`
  color: ${variables.colorMain};
  text-transform: uppercase;
  font-size: 3.2rem;
`;

export const StyledDate = styled.h2`
  font-size: 2rem;
`;

export const DescriptionWrapper = styled.div`
  display: block;
  columns: 3;
  column-gap: 4rem;
  text-align: justify;
  font-size: 1.6rem;
  margin-bottom: 5rem;
`;

export const StyledWrapper = styled.div`
  flex-direction: column;
`;

export const LinkWrapper = styled.div`
  padding: 0.5rem 0;
`;

export const LinkTitleWrapper = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
`;

export const IndexWrapper = styled.span`
  display: inline-flex;
  padding-right: 3rem;
  color: ${variables.colorLink};
  font-weight: bold;
`;

export const UsefulLinkWrapper = styled.a`
  color: ${variables.colorLink};
  font-weight: bold;
  transition: 0.3s;
  &:hover {
    color: ${variables.colorMain};
    transition: 0.3s;
  }
`;

export const Button = styled.button`
  position: absolute;
  bottom: 7rem;
  right: 5rem;
  width: fit-content;
  border-radius: 4px;
  background-color: ${variables.colorMain};
  cursor: pointer;
  border: 2px solid ${variables.colorMain};
  transition: 0.3s;
  &:hover {
    background-color: ${variables.colorWhite};
    transition: 0.3s;
  }
`;
export const Link = styled.a`
  padding: 0.9rem 3.3rem;
  font-family: ${variables.mainFont};
  font-size: 2rem;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
  &:hover {
    color: ${variables.colorMain};
    transition: 0.3s;
  }
`;
export const DownloadIcon = styled.i`
  font-size: 1.6rem;
  margin-left: 1rem;
`;
