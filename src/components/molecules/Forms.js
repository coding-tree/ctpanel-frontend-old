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
    axios.all(
      selectedElement.map((element) => {
        return axios
          .delete(`${process.env.REACT_APP_SERVER_URL}/${destination}/${element._id}`)
          .then((response) => console.log(response))
          .then(() => setIsModalVisible(!isModalVisible))
          .catch((err) => console.log(err));
      })
    );
  };

  return (
    <StyledForm onSubmit={(e) => e.preventDefault()}>
      <StyledTitle>Czy na pewno chcesz usunąć {listItems.length} następujące rekordy?</StyledTitle>
      <StyledList>{listItems}</StyledList>
      <StyledButtonsContainer>
        <DeleteButton onClick={() => setIsModalVisible(!isModalVisible)} width="true">
          Anuluj
        </DeleteButton>
        <PrimaryButton width="true" onClick={deleteItems}>
          Usuń
        </PrimaryButton>
      </StyledButtonsContainer>
    </StyledForm>
  );
};

export const EditForm = ({selectedElement, destination, isModalVisible, setIsModalVisible}) => {
  return (
    <StyledForm onSubmit={(e) => e.preventDefault()}>
      <StyledTitle>
        Edytuj temat &nbsp; "<StyledTopic>{selectedElement[0].topic}</StyledTopic>"
      </StyledTitle>
      <StyledButtonsContainer>
        <DeleteButton onClick={() => setIsModalVisible(!isModalVisible)} width="true">
          Anuluj
        </DeleteButton>
        <PrimaryButton width="true">Zapisz</PrimaryButton>
      </StyledButtonsContainer>
    </StyledForm>
  );
};

const StyledTitle = styled.h3`
  font-family: inherit;
  font-size: 1.6rem;
  font-weight: 700;
  display: flex;
  align-items: center;
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
  margin: 3rem 0;
`;

const StyledListItem = styled.li`
  font-size: 1.6rem;
  margin-left: 3.5rem;
`;

const StyledTopic = styled.span`
  display: inline-block;
  width: 50%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
