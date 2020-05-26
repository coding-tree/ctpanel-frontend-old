import React from 'react';
import {CancelButton, PrimaryButton, DeleteButton} from 'components/atoms/Button';
import axios from 'axios';
import styled from 'styled-components';
import variables from 'settings/variables';

export const DeleteForm = ({selectedElement, destination, isModalVisible, setIsModalVisible}) => {
  const listItems = selectedElement.map((el, index) => {
    return <StyledListItem key={index}>{el.topic}</StyledListItem>;
  });

  const deleteItems = () => {
    // axios.all(
    //   selectedElement.map((element) => {
    //     return axios
    //       .delete(`${process.env.REACT_APP_SERVER_URL}/${destination}/${element._id}`)
    //       .then((response) => console.log(response))
    //       .catch((err) => console.log(err));
    //   })
    // );
  };

  return (
    <StyledForm onSubmit={(e) => e.preventDefault()}>
      <StyledTitle>Czy na pewno chcesz usunąć x następujące rekordy?</StyledTitle>
      <StyledList>{listItems}</StyledList>
      <StyledButtonsContainer>
        <DeleteButton onClick={() => setIsModalVisible(!isModalVisible)} width="true">
          Anuluj
        </DeleteButton>
        <PrimaryButton width="true">Usuń</PrimaryButton>
      </StyledButtonsContainer>
    </StyledForm>
  );
};

export const EditForm = ({selectedElement, destination}) => (
  <form onSubmit={(e) => e.preventDefault()}>
    <h3>Czy na pewno chcesz usunąć x następujące rekordy?</h3>
    <CancelButton>Anuluj</CancelButton>
    <PrimaryButton>Usuń</PrimaryButton>
  </form>
);

export const EditTopicForm = ({selectedElement, destination}) => (
  <form onSubmit={(e) => e.preventDefault()}>
    <h3>Czy na pewno chcesz usunąć ten element?</h3>
    <PrimaryButton>Tak</PrimaryButton>
    <CancelButton>Nie</CancelButton>
  </form>
);

export const EditMeetingForm = ({selectedElement, destination}) => (
  <form onSubmit={(e) => e.preventDefault()}>
    <h3>Czy na pewno chcesz usunąć ten element?</h3>
    <PrimaryButton>Tak</PrimaryButton>
    <CancelButton>Nie</CancelButton>
  </form>
);

const StyledTitle = styled.h3`
  font-family: inherit;
  font-size: 1.6rem;
  font-weight: 700;
`;

const StyledButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 3rem;
  button:last-child {
    margin-left: 1rem;
  }
`;

const StyledForm = styled.form`
  padding: 3rem;
  line-height: 2;
`;

const StyledList = styled.ul`
  list-style: none;
  margin-bottom: 3rem;
`;

const StyledListItem = styled.li`
  font-size: 1.6rem;
  text-indent: 3.5rem;
`;
