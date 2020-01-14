import React, {lazy} from 'react';
import styled from 'styled-components';

const Button = lazy(() => import('atoms/Button'));
const Anchor = lazy(() => import('atoms/Anchor'));
const Icon = lazy(() => import('atoms/Icon'));

const StyledWrapper = styled.div`
  position: absolute;
  bottom: 7rem;
  right: 5rem;
`;

const DownloadButton = ({resourcesURL, iconClassName, children}) => {
  return (
    <StyledWrapper>
      <Button primary>
        <Anchor fontSize="2rem" buttonLink as="a" href={resourcesURL} download target="_blank">
          {children}
          <Icon padding="0 0 0 1rem" className={iconClassName}></Icon>
        </Anchor>
      </Button>
    </StyledWrapper>
  );
};

export default DownloadButton;
