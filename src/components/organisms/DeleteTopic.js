import React from 'react';
import { DeleteButton, CancelButton } from 'components/atoms/Button';
import styled from 'styled-components';
import { toast } from 'react-toastify';

import { useDispatch } from 'react-redux';
import { getTopics } from 'selectors/fetchTopics';
import { deleteTopics } from 'selectors/fetchTopics';
import variables from 'settings/variables';

const DeleteTopic = ({selectedElement, toggleSelection, destination, isModalVisible, setIsModalVisible, setSubmitting}) => {
  const dispatch = useDispatch();
  const getTopicsAction = () => dispatch(getTopics());
  const deleteTopicsAction = (dataToSend, destination) => dispatch(deleteTopics(dataToSend, destination));

  const listItems = selectedElement.map((el, index) => {
    return <StyledListItem key={index}>{el.topic}</StyledListItem>;
  });

  const deleteItems = () => {
    setSubmitting(true);
    deleteTopicsAction(selectedElement, destination)
      .then(({ successfullyRemovedTopics, unsuccessfullyRemovedTopics }) => {
        setSubmitting(false);
        toggleSelection([]);
        if(successfullyRemovedTopics.length > 0){
          toast.success(`
            Pomyślnie usunięto następujące tematy:
            ${successfullyRemovedTopics.toString()}
          `);
        };
        if(unsuccessfullyRemovedTopics.length > 0){
          toast.error(`
            Nie udało się usunąć następujących tematów:
            ${unsuccessfullyRemovedTopics.toString()}
          `);
        };
      })
      .finally(() => getTopicsAction());
  };

  return (
    <StyledForm onSubmit={(e) => e.preventDefault()}>
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

export default DeleteTopic;

const StyledTitle = styled.h3`
  font-family: inherit;
  font-size: 1.6rem;
  font-weight: 700;
  display: flex;
  align-items: center;

  @media only screen and (max-width: ${variables.bpTablet}) {
    font-size: 1.4rem;
  };

  @media only screen and (max-width: ${variables.bpLargeMobile}) {
    font-size: 1.2rem;
  };
`;

const StyledButtonsContainer = styled.div`
  justify-content: flex-end;
  margin-top: 3rem;

  button:last-child {
    margin-left: 1rem;
  };

  @media only screen and (max-width: ${variables.bpLargeMobile}) {
    justify-content: space-between;
    > button {
      width: 100%;
    };
  };
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

  @media only screen and (max-width: ${variables.bpTablet}) {
    font-size: 1.4rem;
  };

  @media only screen and (max-width: ${variables.bpLargeMobile}) {
    font-size: 1.2rem;
  };
`;