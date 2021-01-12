import React from 'react';
import variables from 'settings/variables';
import styled, {keyframes} from 'styled-components';
import Title from './Title';

const Loader = ({isLoading, title}) => {
  if (isLoading) {
    return (
      <StyledContainer>
        <StyledWrapper>
          <StyledLoader>
            <StyledLoaderItem></StyledLoaderItem>
          </StyledLoader>
        </StyledWrapper>
        <Title white>{title}</Title>
      </StyledContainer>
    );
  }
  return null;
};

export default Loader;

const rotate = keyframes`
  0% { transform: rotate(0deg) }
  50% { transform: rotate(180deg) }
  100% { transform: rotate(360deg) }
`;

const StyledContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  justify-items: center;
  align-content: center;
  row-gap: 3rem;
  background-color: ${variables.colorFont};
  z-index: 99999;
  ${Title} {
    text-shadow: 0 3px 6px ${variables.modalBackground};
  }
`;

const StyledWrapper = styled.div`
  width: 100px;
  height: 100px;
  display: inline-block;
  overflow: hidden;
  background: transparent;
  z-index: 999999;
`;

const StyledLoader = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0;
`;

const StyledLoaderItem = styled.div`
  position: absolute;
  animation: ${rotate} 1s linear infinite;
  width: 80px;
  height: 80px;
  top: 10px;
  left: 10px;
  border-radius: 50%;
  box-shadow: 0 4px 0 0 ${variables.colorMain};
  transform-origin: 40px 41px;
  box-sizing: content-box;
`;
