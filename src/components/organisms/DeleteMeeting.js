import React from 'react';
import {DeleteButton, CancelButton} from 'components/atoms/Button';
import axios from 'axios';
import styled from 'styled-components';
import {toast} from 'react-toastify';

const DeleteMeeting = ({selectedElement, destination, isModalVisible, setIsModalVisible, setSubmitting}) => {
  const listItems = selectedElement.map((el, index) => {
    return <StyledListItem key={index}>{el.topic}</StyledListItem>;
  });

  const deleteItems = () => {
    setSubmitting(true);
    axios
      .all(
        selectedElement.map(element => {
          return axios.delete(`${process.env.REACT_APP_SERVER_URL}/${destination}/${element._id}`);
        })
      )
      .then(() => {
        setSubmitting(false);
        setIsModalVisible(false);
        toast.success('Pomyślnie usunięto spotkania!');
      })
      .catch(() => {
        setSubmitting(false);
        toast.error('Nie udało się usunąć spotkań!');
      });
  };

  return (
    <StyledForm onSubmit={e => e.preventDefault()}>
      <StyledTitle>Czy na pewno chcesz usunąć {listItems.length} następujące rekordy?</StyledTitle>
      <StyledList>{listItems}</StyledList>
      <StyledButtonsContainer>
        <CancelButton large onClick={() => setIsModalVisible(!isModalVisible)}>
          Anuluj
        </CancelButton>
        <DeleteButton large onClick={deleteItems}>
          Usuń
        </DeleteButton>
      </StyledButtonsContainer>
    </StyledForm>
  );
};

export default DeleteMeeting;

const StyledTitle = styled.h3`
  font-family: inherit;
  font-size: 1.6rem;
  font-weight: 700;
  display: flex;
  align-items: center;
`;

const StyledButtonsContainer = styled.div`
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
  list-style: disc inside;
`;

const StyledListItem = styled.li`
  font-size: 1.6rem;
  display: list-item;
`;
