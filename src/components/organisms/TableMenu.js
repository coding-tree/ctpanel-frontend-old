import React, {useState} from 'react';
import {withRouter} from 'react-router';
import {routes} from 'routes';
import Button from 'components/atoms/Button/Button';
import Icon from 'components/atoms/Icon';

import {
  StyledBox,
  StyledButton,
  StyledButtonsContainer,
  StyledCloseButton,
  StyledForm,
  StyledHeader,
  StyledInput,
  StyledInputContainer,
  StyledLabel,
  StyledModalContainer,
  StyledOption,
  StyledSelect,
  StyledSelectContainer,
  StyledTableActions,
  StyledTag,
  StyledTagText,
  StyledTags,
  StyledTagsContainer,
  StyledTagsInput,
  StyledTagsInputBox,
  StyledTextArea,
} from 'styledComponents/ModalStyled/';

const SchedulesTableMenu = () => {
  const [isModalVisible, setIsModalVisible] = useState(true);
  const [tags, setTags] = useState(['js']);

  const removeTag = (e) => {
    const selectedTag = e.target.parentNode.firstChild.textContent;
    setTags(tags.filter((item) => item !== selectedTag));
  };

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

  const renderedTags = tags.map((tag) => (
    <StyledTag key={tag + (Math.random() * 10000).toString()}>
      <StyledTagText>{tag}</StyledTagText>
      <StyledCloseButton onClick={removeTag}>&times;</StyledCloseButton>
    </StyledTag>
  ));

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
            <StyledInputContainer>
              <StyledLabel>Data</StyledLabel>
              <StyledLabel>Czas</StyledLabel>
            </StyledInputContainer>
            <StyledInputContainer>
              <StyledInput type="date"></StyledInput>
              <StyledInput type="time"></StyledInput>
            </StyledInputContainer>
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
    default:
      return console.log('something went wrong');
  }
};

export default withRouter(TableMenu);
