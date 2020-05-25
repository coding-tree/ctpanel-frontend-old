import React, {useState, useEffect} from 'react';
import {CancelButton, PrimaryButton} from 'components/atoms/Button';
import Icon from 'components/atoms/Icon';
import styled, {css} from 'styled-components';
import variables from 'settings/variables';

export const DeleteModal = ({children, modalTitle, title, icon}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <>
      <CancelButton large uppercase onClick={() => setIsModalVisible(!isModalVisible)}>
        {title} <Icon fontSize="1.4rem" padding="0 0 0 .5rem" className={icon}></Icon>
      </CancelButton>
      <Modal title={modalTitle} isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible}>
        {React.cloneElement(children, {isModalVisible, setIsModalVisible})}
      </Modal>
    </>
  );
};

export const AddModal = ({children, modalTitle, title, icon}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <>
      <PrimaryButton large uppercase onClick={() => setIsModalVisible(!isModalVisible)}>
        {title} <Icon fontSize="1.4rem" padding="0 0 0 .5rem" className={icon}></Icon>
      </PrimaryButton>
      <Modal title={modalTitle} isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible}>
        {React.cloneElement(children, {isModalVisible, setIsModalVisible})}
      </Modal>
    </>
  );
};

const Modal = ({children, title, isModalVisible}) => {
  useEffect(() => {
    document.body.style.overflowY = isModalVisible ? 'hidden' : 'auto';
  }, [isModalVisible]);

  return (
    <StyledModalContainer isModalVisible={isModalVisible}>
      <StyledBox isModalVisible={isModalVisible}>
        <StyledHeader>{title}</StyledHeader>
        {children}
      </StyledBox>
    </StyledModalContainer>
  );
};

const StyledModalContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  justify-content: center;
  align-items: center;
  position: fixed;
  min-height: 100vh;
  width: 100%;
  background-color: ${variables.modalBackground};
  opacity: 0;
  visibility: hidden;
  overflow-y: auto;
  transition: 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);

  ${({isModalVisible}) =>
    isModalVisible &&
    css`
      opacity: 1;
      visibility: visible;
    `}
  top: 0;
  left: 0;
  bottom: 0;
`;

const StyledBox = styled.div`
  background-color: ${variables.colorWhite};
  flex-direction: column;
  width: 64rem;
  border-radius: 4px;
  height: fit-content;
  margin: 5rem 0;
  box-shadow: 0 3px 6px ${variables.modalBackground};
  transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1) 0.2s;
  opacity: 0;
  transform: scale(0.7);
  ${({isModalVisible}) =>
    isModalVisible &&
    css`
      opacity: 1;
      transform: scale(1);
    `}
`;

const StyledHeader = styled.div`
  font-weight: 700;
  font-size: 2rem;
  width: 100%;
  display: flex;
  align-items: center;
  height: 65px;
  background-color: ${variables.colorMain};
  color: ${variables.colorWhite};
  padding: 2.5rem;
`;
