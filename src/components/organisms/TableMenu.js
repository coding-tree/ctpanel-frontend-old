import React, {useState} from 'react';
import {withRouter} from 'react-router';
import styled from 'styled-components';
import {routes} from 'routes';
import Button from 'components/atoms/Button/Button';
import Input from 'components/atoms/Input';
import Icon from 'components/atoms/Icon';

import {
  Container,
  StyledWrapper,
  StyledTableActions,
  StyledModalContainer,
  StyledBox,
  StyledHeader,
  StyledForm,
  StyledInput,
  StyledTextArea,
  StyledLabel,
  StyledSelectContainer,
  StyledSelect,
  StyledOption,
  StyledButtonsContainer,
  StyledButton,
  StyledTagsContainer,
  StyledTags,
  StyledTag,
  StyledTagsInput,
  StyledCloseButton,
  StyledTagsInputBox,
} from 'styledComponents/ModalStyled/';

const toggleModal = () => {
  alert('it works');
};

const SchedulesTableMenu = () => {
  const [isModalVisible, setIsModalVisible] = useState(true);
  const [tags, setTags] = useState([]);
  const renderedTags = tags.map((tag) => (
    <StyledTag>
      {tag}
      <StyledCloseButton>&times;</StyledCloseButton>
    </StyledTag>
  ));

  const handleTags = (e) => {
    // space
    if (e.keyCode === 32) {
      console.log('wcisnieto spacje');
      setTags([...tags, e.target.value]);
      e.target.value = '';
    }
    // backspace
    if (e.keyCode === 8 && e.target.value === '' && tags.length > 0) {
      const lastItemInArray = tags[tags.length - 1];
      console.log('backspace');
      e.target.value = lastItemInArray;
      setTags(tags.filter((item) => item !== lastItemInArray));
    }
  };

  return (
    <StyledTableActions>
      <Button
        width="144px"
        height="42px"
        primary
        uppercase
        onClick={() => {
          setIsModalVisible(!isModalVisible);
        }}
      >
        Dodaj <Icon fontSize="1.4rem" padding="0 0 0 .5rem" className="fas fa-plus"></Icon>
      </Button>
      <StyledModalContainer isModalVisible={isModalVisible}>
        <StyledBox>
          <StyledHeader>Zaplanuj nowe spotkanie</StyledHeader>
          <StyledForm
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <StyledLabel>Data</StyledLabel>
            <StyledInput placeholder="wpisz datę"></StyledInput>
            <StyledLabel>Temat spotkania</StyledLabel>
            <StyledTextArea placeholder="wpisz temat"></StyledTextArea>
            <StyledLabel>Prowadzący</StyledLabel>
            <StyledSelectContainer>
              <StyledSelect>
                <StyledOption value="Damian Ospara">Damian Ospara</StyledOption>
                <StyledOption value="Jakub Wojtoń">Jakub Wojtoń</StyledOption>
                <StyledOption value="Kazimierz Bagrowski">Kazimierz Bagrowski</StyledOption>
              </StyledSelect>
            </StyledSelectContainer>
            <StyledLabel>Odnośnik do spotkania</StyledLabel>
            <StyledInput placeholder="link do spotkania"></StyledInput>
            <StyledLabel>Opis spotkania</StyledLabel>
            <StyledTextArea placeholder="wpisz opis"></StyledTextArea>
            <StyledLabel>Tagi</StyledLabel>
            <StyledTagsContainer>
              <StyledTags>{renderedTags}</StyledTags>
              <StyledTagsInputBox></StyledTagsInputBox>
              <StyledTagsInput placeholder="wpisz tagi" onKeyUp={handleTags}></StyledTagsInput>
            </StyledTagsContainer>
            <StyledButtonsContainer>
              <StyledButton isModalVisible={isModalVisible} onClick={() => setIsModalVisible(!isModalVisible)}>
                Anuluj
              </StyledButton>
              <StyledButton isModalVisible={isModalVisible} onClick={() => setIsModalVisible(!isModalVisible)}>
                Dodaj
              </StyledButton>
            </StyledButtonsContainer>
          </StyledForm>
        </StyledBox>
      </StyledModalContainer>
    </StyledTableActions>
  );
};

const TopicDataBaseTableMenu = () => <button>DODAJ +</button>;

const MeetingHistoryTableMenu = () => (
  <>
    <span>data</span>
    <select>
      <option>1</option>
      <option>2</option>
      <option>3</option>
    </select>
    <select>
      <option>1</option>
      <option>2</option>
      <option>3</option>
    </select>
    <input type="text" />
  </>
);

const TableMenu = ({location}) => {
  switch (location.pathname) {
    case routes.timetable:
      return <SchedulesTableMenu />;
    case routes.topicDatabase:
      return <TopicDataBaseTableMenu />;
    case routes.history:
      return <MeetingHistoryTableMenu />;
  }
};

export default withRouter(TableMenu);
