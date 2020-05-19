import React, {useState} from 'react';
import {withFormik, Form, Field, ErrorMessage} from 'formik';
import styled, {css} from 'styled-components';
import * as Yup from 'yup';
import Button from 'components/atoms/Button/Button';
import Icon from 'components/atoms/Icon';
import axios from 'axios';
import variables from 'settings/variables';

const Meeting = ({setFieldValue}) => {
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

  const leaders = ['', 'Damian Ospara', 'Józef Rzadkosz'];

  return (
    <>
      <Button width="144px" height="42px" primary uppercase onClick={() => setIsModalVisible(!isModalVisible)}>
        Dodaj <Icon fontSize="1.4rem" padding="0 0 0 .5rem" className="fas fa-plus"></Icon>
      </Button>
      <StyledModalContainer isModalVisible={isModalVisible}>
        <StyledBox isModalVisible={isModalVisible}>
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
              <StyledInput as={Field} name="date" type="date" id="date"></StyledInput>
              <StyledInput as={Field} name="time" type="time" id="time"></StyledInput>
              <ErrorMessage component={StyledError} name="date"></ErrorMessage>
              <ErrorMessage component={StyledError} name="time"></ErrorMessage>
            </StyledInputContainer>
            <StyledLabel htmlFor="topic" id="topicLabel">
              Temat spotkania
            </StyledLabel>
            <Field as="textarea" placeholder="Wpisz temat spotkania" name="topic" id="topic"></Field>
            <ErrorMessage component={StyledError} name="topic"></ErrorMessage>
            <StyledLabel htmlFor="leader" id="leaderLabel">
              Prowadzący
            </StyledLabel>
            <StyledSelectContainer>
              {/* Invisible select */}
              <Field as="select" id="leader" name="leader">
                {leaders.map((el, index) => (
                  <option key={index}>{el}</option>
                ))}
              </Field>

              {/* TODO: Create custom select */}
            </StyledSelectContainer>
            <StyledLabel htmlFor="meetingHref" id="meetingHrefLabel">
              Odnośnik do spotkania
            </StyledLabel>
            <StyledInput as={Field} placeholder="Link do spotkania" name="meetingHref" id="meetingHref"></StyledInput>
            <ErrorMessage component={StyledError} name="meetingHref"></ErrorMessage>
            <StyledLabel htmlFor="description" id="descriptionLabel">
              Opis spotkania
            </StyledLabel>
            <Field as="textarea" placeholder="Wpisz opis spotkania" id="description" name="description"></Field>
            <ErrorMessage component={StyledError} name="description"></ErrorMessage>
            <StyledTagsContainer>
              <StyledTags name="renderedTags">{renderedTags}</StyledTags>
              <StyledTagsInputBox></StyledTagsInputBox>

              <StyledTagsInput placeholder="wpisz tagi" onKeyUp={handleTags}></StyledTagsInput>
              <ErrorMessage component={StyledError} name="tags"></ErrorMessage>
            </StyledTagsContainer>

            {/* INVISIBLE */}
            <StyledInput as={Field} name="tags" id="tags"></StyledInput>

            <StyledButtonsContainer>
              <StyledButton onClick={() => setIsModalVisible(!isModalVisible)} type="button">
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
      leader: leader || '',
      meetingHref: meetingHref || '',
      description: description || '',
      tags: tags || '',
    };
  },
  validationSchema: Yup.object().shape({
    date: Yup.date('Musisz podać datę').required('Data jest wymagana'),
    time: Yup.string().min(5).max(5).min(0, 'Aż tak dawno temu nie było spotkania').required('Czas jest wymagany'),
    topic: Yup.string()
      .min(5, 'Wpisz chociaż te 5 znaków')
      .max(256, 'Zbyt długi temat, rozbij go na kilka spotkań')
      .required('Temat jest wymagany'),
    leader: Yup.string().required('Wprowadź prowadzącego'),
    meetingHref: Yup.string().required('Musisz podać link'),
    description: Yup.string().required('Opis jest wymagany'),
  }),
  handleSubmit: (values) => {
    console.log(values);
    // fetch idzie tu
    let {date, time, topic, leader, meetingHref, description, tags} = values;
    let dateToConvert = `${date} ${time}`;
    date = new Date(dateToConvert);
    let timestamp = date.getTime();
    date = timestamp;
    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/meetings`, {date, topic, leader, meetingHref, description, tags})
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
})(Meeting);

export default Formik;

const StyledOption = styled.div``;
const StyledSelect = styled.div`
  border: 2px solid red;
`;

// STYLES
const StyledModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  height: 100vh;
  width: 100%;
  background-color: ${variables.modalBackground};
  opacity: 0;
  visibility: hidden;
  transition: 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);

  ${({isModalVisible}) =>
    isModalVisible &&
    css`
      opacity: 1;
      visibility: visible;
    `}
  top: 0;
  left: 0;
`;
const StyledBox = styled.div`
  background-color: ${variables.colorWhite};
  flex-direction: column;
  width: 64rem;
  border-radius: 4px;
  overflow: hidden;
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

const StyledError = styled.span`
  padding: 5px 15px;
  border-radius: 4px;
  font-weight: bold;
  color: ${variables.colorWhite};
  background-color: ${variables.colorError};
  margin-bottom: 2rem;
  height: 3.6rem;
  align-items: center;
`;

const StyledForm = styled.form`
  font-family: inherit;
  padding: 2.3rem;
  display: flex;
  flex-direction: column;
  textarea {
    font-family: inherit;
    font-size: 1.6rem;
    border-radius: 4px;
    border: 1px solid ${variables.borderColor};
    padding: 12px;
    color: ${variables.colorFont};
    margin-bottom: 2.2rem;
    height: 12rem;
    resize: none;
    &::placeholder {
      color: ${variables.colorLink};
    }
  }
`;

const StyledInput = styled.input`
  font-family: inherit;
  font-size: 1.6rem;
  width: 100%;
  min-height: 3.6rem;
  border-radius: 4px;
  border: 1px solid ${variables.borderColor};
  padding: 0 12px;
  color: ${variables.colorFont};
  margin-bottom: 2.2rem;
  &::placeholder {
    color: ${variables.colorLink};
  }
`;

const StyledLabel = styled.label`
  font-weight: 700;
  font-size: 1.6rem;
  margin-bottom: 5px;
  color: ${variables.colorFont};
`;

const StyledSelectContainer = styled.div`
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
  margin-bottom: 2.2rem;
`;

const StyledButtonsContainer = styled.div`
  font-family: inherit;
  display: flex;
  justify-content: flex-end;
`;

const StyledButton = styled.button`
  border: 1px solid ${variables.borderColor};
  padding: 10px 45px;
  border-radius: 4px;
  background: ${variables.colorMain};
  color: ${variables.colorWhite};
  font-weight: 700;
  transition: 0.25s ease-in-out;
  &:hover {
    cursor: pointer;
    background-color: ${variables.colorWhite};
    border-color: #019740;
    color: ${variables.colorFont};
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
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  border-radius: 4px;
  border: 1px solid ${variables.borderColor};
  color: ${variables.colorFont};
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
  justify-content: center;
  align-items: center;

  margin-left: 5px;
  padding: 5px 10px;
  border-radius: 4px;
  flex-wrap: nowrap;
  background-color: ${variables.colorMain};
  color: ${variables.colorWhite};
  font-size: 1.2rem;
`;

const StyledTagText = styled.span``;

const StyledTagsInput = styled.input`
  outline: none;
  border: none;
  padding: 12px;
  height: 100%;
  width: auto;
  display: flex;
`;

const StyledCloseButton = styled.span`
  font-size: 1.6rem;
  font-weight: bold;
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
