import React, {useState, useEffect} from 'react';
import {PrimaryButton, EditButton, DeleteButton, MainButton} from 'components/atoms/Button';
import Icon from 'components/atoms/Icon';
import styled, {css} from 'styled-components';
import variables from 'settings/variables';
import Title from 'components/atoms/Title';
import Loader from 'components/atoms/Loader';

export const DeleteModal = ({children, modalTitle, title, icon}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isSubmitting, setSubmitting] = useState(false);

  return (
    <>
      <DeleteButton large uppercase onClick={() => setIsModalVisible(!isModalVisible)}>
        {title} <Icon fontSize="1.4rem" padding="0 0 0 .5rem" className={icon}></Icon>
      </DeleteButton>
      <Modal title={modalTitle} isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible}>
        {React.cloneElement(children, {isModalVisible, setIsModalVisible, isSubmitting, setSubmitting})}
      </Modal>
      <Loader title="Trwa usuwanie tematów..." isLoading={isSubmitting}></Loader>
    </>
  );
};

export const AddModal = ({children, modalTitle, title, icon}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isSubmitting, setSubmitting] = useState(false);

  return (
    <>
      <PrimaryButton large uppercase onClick={() => setIsModalVisible(!isModalVisible)}>
        {title} <Icon fontSize="1.4rem" padding="0 0 0 .5rem" className={icon}></Icon>
      </PrimaryButton>
      <Modal title={modalTitle} isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible}>
        {React.cloneElement(children, {isModalVisible, setIsModalVisible, isSubmitting, setSubmitting})}
      </Modal>
      <Loader title="Trwa dodawanie tematu..." isLoading={isSubmitting}></Loader>
    </>
  );
};

export const JoinModal = ({children, modalTitle, title, icon}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <>
      <MainButton large uppercase onClick={() => setIsModalVisible(!isModalVisible)}>
        {title} {icon && <Icon fontSize="1.4rem" padding="0 0 0 .5rem" className={icon}></Icon>}
      </MainButton>
      <Modal title={modalTitle} isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible}>
        {React.cloneElement(children, {isModalVisible, setIsModalVisible})}
      </Modal>
    </>
  );
};

export const EditModal = ({children, modalTitle, title, icon}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isSubmitting, setSubmitting] = useState(false);

  return (
    <>
      <EditButton large uppercase onClick={() => setIsModalVisible(!isModalVisible)}>
        {title} <Icon fontSize="1.4rem" padding="0 0 0 .5rem" className={icon}></Icon>
      </EditButton>
      <Modal title={modalTitle} isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible}>
        {React.cloneElement(children, {isModalVisible, setIsModalVisible, isSubmitting, setSubmitting})}
      </Modal>
      <Loader title="Trwa edycja tematu..." isLoading={isSubmitting}></Loader>
    </>
  );
};

const Modal = ({children, title, isModalVisible, setIsModalVisible}) => {
  useEffect(() => {
    document.body.style.overflowY = isModalVisible ? 'hidden' : 'auto';
  }, [isModalVisible]);

  const closeModal = (e) => {
    const current = e.currentTarget;
    if (current === e.target) {
      setIsModalVisible(false);
    }
  };

  return (
    <StyledModalContainer onClick={(e) => closeModal(e)} isModalVisible={isModalVisible}>
      <StyledBox isModalVisible={isModalVisible}>
        <StyledHeader>
          <Title white fontSize="2rem">
            {title}
          </Title>
          <Icon onClick={() => setIsModalVisible(false)} fontSize="2rem" className="fas fa-times"></Icon>
        </StyledHeader>
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
  z-index: 999;
  ${({isModalVisible}) =>
    isModalVisible &&
    css`
      opacity: 1;
      visibility: visible;
    `}
  top: 0;
  left: 0;
  bottom: 0;

  @media only screen and (max-width: ${variables.bpTablet}) {
    justify-content: initial;
  }
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

    @media only screen and (max-width: ${variables.bpTablet}) {
      width: 100%;
      margin: 0;
      border-radius: 0;
      
    }
`;

const StyledHeader = styled.div`
  width: 100%;
  align-items: center;
  justify-content: space-between;
  height: 65px;
  background-color: ${variables.colorMain};
  color: ${variables.colorWhite};
  padding: 2.5rem;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  ${Title} {
    @media only screen and (max-width: ${variables.bpTablet}) {
      font-size: 1.4rem;
    }
    @media only screen and (max-width: ${variables.bpLargeMobile}) {
      font-size: 1.2rem;
    }
  }
`;
