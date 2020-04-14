import React from 'react';
import SocialIcon from 'components/molecules/SocialIcon';
import styled from 'styled-components';
import variables from 'settings/variables';

const StyledSocialIcons = styled.div`
  /* color: ${variables.colorMain}; */
  justify-content: center;
  align-items: flex-start;
  font-size: 3.2rem;
  margin-top: 2rem;
  & > a {
    font-weight: 400;
    padding: 0 2rem;
  }
`;

const SocialIcons = () => {
  return (
    <StyledSocialIcons>
      <SocialIcon className="fab fa-facebook-square"></SocialIcon>
      <SocialIcon className="fab fa-discord"></SocialIcon>
      <SocialIcon className="fab fa-github-square"></SocialIcon>
    </StyledSocialIcons>
  );
};

export default SocialIcons;
