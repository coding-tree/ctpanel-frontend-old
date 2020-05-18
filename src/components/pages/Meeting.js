import React, {useState} from 'react';
import {withFormik, Form, Field, ErrorMessage} from 'formik';
import styled from 'styled-components';
import * as Yup from 'yup';
import Button from 'components/atoms/Button/Button';
import Icon from 'components/atoms/Icon';
import axios from 'axios';

const Meeting = ({errors, isSubmitting, setFieldValue}, props) => {
  const [tags, setTags] = useState(['js']);
  const [isModalVisible, setIsModalVisible] = useState(true);

  const removeTag = (e) => {
    const selectedTag = e.target.parentNode.firstChild.textContent;
    setTags(tags.filter((item) => item !== selectedTag));
  };

  const handleTags = (e) => {
    // space
    if (e.keyCode === 32) {
      const updatedTags = [...tags, e.target.value.trim()];
      setFieldValue('tags', [...updatedTags]);
      setTags(updatedTags);
      e.target.value = '';
    }
    // backspace
    if (e.keyCode === 8 && e.target.value === '' && tags.length > 0) {
      const lastItemInArray = tags[tags.length - 1];
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

  const showVal = (e) => {
    console.log(e.target.value);
  };

  const StyledField = (props) => (
    <Field {...props} as="select" id="leader" name="leader" children={props.children}></Field>
  );

  return (
    <>
      <Button width="144px" height="42px" primary uppercase onClick={() => setIsModalVisible(!isModalVisible)}>
        Dodaj <Icon fontSize="1.4rem" padding="0 0 0 .5rem" className="fas fa-plus"></Icon>
      </Button>
      <StyledModalContainer isModalVisible={isModalVisible}>
        <StyledBox>
          <StyledHeader>Zaplanuj nowe spotkanie</StyledHeader>
          <StyledForm as={Form}>
            <StyledInputContainer>
              <StyledLabel htmlFor="date" id="dateLabel">
                Data
              </StyledLabel>
              <StyledLabel htmlFor="time" id="timeLabel">
                Czas
              </StyledLabel>
            </StyledInputContainer>
            <StyledInputContainer>
              <StyledInput as={Field} onClick={showVal} name="date" type="date" id="date"></StyledInput>
              <StyledInput as={Field} onClick={showVal} name="time" type="time" id="time"></StyledInput>
              <ErrorMessage component={StyledText} name="date"></ErrorMessage>
              <ErrorMessage component={StyledText} name="time"></ErrorMessage>
            </StyledInputContainer>
            <StyledLabel htmlFor="topic" id="topicLabel">
              Temat spotkania
            </StyledLabel>
            <Field as={StyledTextArea} placeholder="wpisz temat" name="topic" id="topic"></Field>
            <ErrorMessage component={StyledText} name="topic"></ErrorMessage>
            <StyledLabel htmlFor="leader" id="leaderLabel">
              Prowadzący
            </StyledLabel>
            <StyledSelectContainer>
              <StyledSelect as={StyledField}>
                <StyledOption value="Damian Ospara">Damian Ospara</StyledOption>
                <StyledOption value="Kazimierz Bagrowski">Kazimierz Bagrowski</StyledOption>
                <StyledOption value="Jakub Wojtoń">Jakub Wojtoń</StyledOption>
              </StyledSelect>
            </StyledSelectContainer>
            <StyledLabel htmlFor="meetingHref" id="meetingHrefLabel">
              Odnośnik do spotkania
            </StyledLabel>
            <StyledInput as={Field} placeholder="link do spotkania" name="meetingHref" id="meetingHref"></StyledInput>
            <ErrorMessage component={StyledText} name="meetingHref"></ErrorMessage>
            <StyledLabel htmlFor="description" id="descriptionLabel">
              Opis spotkania
            </StyledLabel>
            <StyledTextArea as={Field} placeholder="wpisz opis" id="description" name="description"></StyledTextArea>
            <ErrorMessage component={StyledText} name="description"></ErrorMessage>
            <StyledTagsContainer>
              <StyledTags name="renderedTags">{renderedTags}</StyledTags>
              <StyledTagsInputBox></StyledTagsInputBox>

              <StyledTagsInput placeholder="wpisz tagi" onKeyUp={handleTags}></StyledTagsInput>
              <ErrorMessage component={StyledText} name="tags"></ErrorMessage>
            </StyledTagsContainer>

            {/* INVISIBLE */}
            <StyledInput as={Field} name="tags" id="tags"></StyledInput>

            <StyledButtonsContainer>
              <StyledButton
                onClick={() => setIsModalVisible(!isModalVisible)}
                type="button"
                name="cancelButton"
                id="cancelButton"
              >
                Anuluj
              </StyledButton>
              <StyledButton name="addButton" id="addButton">
                Dodaj
              </StyledButton>
            </StyledButtonsContainer>
          </StyledForm>
        </StyledBox>
      </StyledModalContainer>
    </>
  );
};

const Formik = withFormik({
  mapPropsToValues: ({date, time, topic, leader, meetingHref, description, tags}) => {
    return {
      // todo - convert date & time to timestamp
      date: date || new Date().toISOString().slice(0, 10),
      time: time || '21:33',
      topic: topic || '',
      leader: leader || 'Damian Ospara',
      meetingHref: meetingHref || '',
      description: description || '',
      tags: tags || '',
    };
  },
  validationSchema: Yup.object().shape({
    date: Yup.date('musisz podać datę').required('data jest wymagana'),
    time: Yup.string('czas musi być stringiem')
      .min(5)
      .max(5)
      .min(0, 'aż tak dawno temu nie było spotkania')
      .required('czas jest wymagany'),
    topic: Yup.string('temat musi być tekstem')
      .min(5, 'wpisz chociaż te 5 znaków')
      .max(256, 'zbyt długi temat, rozbij go na kilka spotkań')
      .required('temat jest wymagany'),
    leader: Yup.string('prowadzący nie może być numerem').required('wprowadź prowadzącego'),
    meetingHref: Yup.string('link musi być linkiem').required('musisz podać link'),
    description: Yup.string('opis musi być tekstem').required('opis jest wymagany'),
  }),
  handleSubmit: (values) => {
    console.log(values);
    // fetch idzie tu
    let {date, time, topic, leader, meetingHref, description, tags} = values;
    let dateToConvert = `${date} ${time}`;
    date = new Date(dateToConvert);
    let timestamp = date.getTime();
    date = timestamp;
    // axios
    //   .post(`${process.env.REACT_APP_SERVER_URL}/meetings`, {date, topic, leader, meetingHref, description, tags})
    //   .then((response) => {
    //     console.log(response.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  },
})(Meeting);

export default Formik;

// STYLES
const StyledModalContainer = styled.div`
  font-family: 'Muli', sans-serif;
  display: none;
  ${(props) => props.isModalVisible && 'display: flex'}
  justify-content: center;
  align-items: center;
  position: fixed;
  height: 100vh;
  width: 100%;
  border: 1px solid #019740;
  background-color: #000000aa;
  top: 0;
  left: 0;
`;
const StyledBox = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  width: 640px;
`;

const StyledHeader = styled.div`
  font-weight: 700;
  font-size: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  height: 65px;
  background-color: #019740;
  color: white;
  padding: 25px;
`;

const StyledText = styled.span`
  padding: 5px 15px;
  border: 1px solid red;
`;

const StyledForm = styled.form`
  font-family: 'Muli', sans-serif;
  padding: 23px;
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input`
  font-family: inherit;
  width: 100%;
  border-radius: 4px;
  border: 1px solid #9d9da3;
  padding: 12px;
  color: black;
  margin-bottom: 22px;
`;

const StyledTextArea = styled.textarea`
  font-family: inherit;
  border-radius: 4px;
  border: 1px solid #9d9da3;
  padding: 12px;
  color: black;
  margin-bottom: 22px;
  height: 120px;
  resize: none;
`;

const StyledLabel = styled.label`
  font-family: inherit;
  font-weight: 700;
  font-size: 16px;
  margin-bottom: 5px;
  color: black;
`;

const StyledSelectContainer = styled.div`
  font-family: inherit;
  margin-bottom: 22px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  &::after {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25px;
    position: absolute;
    right: 9px;
    font-family: 'Font Awesome 5 Free';
    font-weight: 900;
    font-size: 2rem;
    content: '\f0dc';
    z-index: 1234;
  }
`;
const StyledSelect = styled.select`
  border-radius: 4px;
  font-family: inherit;
  width: 100%;
  appearance: none;
  position: relative;
  -webkit-appearance: none;
  -moz-appearance: none;
  position: relative;
  font-family: inherit;
  padding: 10px;
  background-color: #f1ebeb;
  padding: 12px;
`;

const StyledOption = styled.option`
  padding: 12px;
  font-family: inherit;

  &:checked {
    background-color: #019740;
    color: white;
  }
`;

const StyledButtonsContainer = styled.div`
  font-family: inherit;
  display: flex;
  justify-content: flex-end;
`;

const StyledButton = styled.button`
  font-family: inherit;
  border: 1px solid #dbdbdb;
  padding: 10px 45px;
  border-radius: 4px;
  background: #019740;
  color: white;
  font-weight: 700;
  transition: 0.25s ease-in-out;
  &:hover {
    cursor: pointer;
    background-color: white;
    border-color: #019740;
    color: black;
  }
  &:first-of-type {
    color: black;
    margin-right: 8px;
    background: none;
    &:hover {
      background-color: #e53d00;
      color: white;
      border-color: #dbdbdb;
    }
  }
`;

const StyledTagsContainer = styled.div`
  display: flex;
  align-items: center;
  font-family: inherit;
  flex-wrap: wrap;
  width: 100%;
  border-radius: 4px;
  border: 1px solid #9d9da3;
  color: black;
  margin-bottom: 22px;
`;

const StyledInputContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  column-gap: 12px;
`;

const StyledTags = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const StyledTag = styled.li`
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-left: 5px;
  padding: 5px 10px;
  border-radius: 4px;
  flex-wrap: nowrap;
  background-color: #009640;
  color: white;
  font-size: 12px;
`;

const StyledTagText = styled.span``;

const StyledTagsInput = styled.input`
  outline: none;
  border: none;
  padding: 12px;
  height: 100%;
  width: auto;
  display: flex;
  flex-grow: 1;
`;

const StyledCloseButton = styled.span`
  font-size: 14px;
  height: 100%;
  margin-left: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
  }
`;
const StyledTagsInputBox = styled.div``;
