import React, {useState, useEffect} from 'react';
import {CancelButton, PrimaryButton} from 'components/atoms/Button';
import Icon from 'components/atoms/Icon';
import {Form} from 'formik';
import styled, {css} from 'styled-components';
import variables from 'settings/variables';

const Modal = ({children, title, column}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    document.body.style.overflowY = isModalVisible ? 'hidden' : 'auto';
  }, [isModalVisible]);
  return (
    <>
      <PrimaryButton large uppercase onClick={() => setIsModalVisible(!isModalVisible)}>
        Dodaj <Icon fontSize="1.4rem" padding="0 0 0 .5rem" className="fas fa-plus"></Icon>
      </PrimaryButton>

      <StyledModalContainer isModalVisible={isModalVisible}>
        <StyledBox isModalVisible={isModalVisible}>
          <StyledHeader>{title}</StyledHeader>
          <StyledForm column={column} as={Form}>
            {children}
            <StyledButtonsContainer column={column}>
              <CancelButton large onClick={() => setIsModalVisible(!isModalVisible)} type="button">
                Anuluj
              </CancelButton>
              <PrimaryButton large>Dodaj</PrimaryButton>
            </StyledButtonsContainer>
          </StyledForm>
        </StyledBox>
      </StyledModalContainer>
    </>
  );
};

export default Modal;

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

export const StyledForm = styled.form`
  font-family: inherit;
  padding: 2.3rem;
  display: grid;
  grid-template-columns: ${({column}) => (column ? `repeat(${column}, 1fr)` : 'repeat(1, 1fr)')};
  grid-column-gap: 2rem;

  textarea {
    font-family: inherit;
    font-size: 1.6rem;
    border-radius: 4px;
    border: 1px solid ${variables.borderColor};
    padding: 12px;
    color: ${variables.colorFont};
    height: 12rem;
    resize: none;
    &::placeholder {
      color: ${variables.colorLink};
    }
  }
`;

const StyledButtonsContainer = styled.div`
  justify-self: end;
  grid-column: ${({column}) => (column ? `span ${column}` : 'span 1')};
  display: grid;
  grid-column-gap: 1rem;
  grid-template-columns: repeat(2, 1fr);
`;
