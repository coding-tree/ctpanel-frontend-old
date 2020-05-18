import React, {useState} from 'react';
import {withFormik, Form, Field, ErrorMessage} from 'formik';
import styled from 'styled-components';
import * as Yup from 'yup';

const Contact = ({errors, isSubmitting}, props) => {
  const [tags, setTags] = useState(['js']);
  const [isModalVisible, setIsModalVisible] = useState(true);

  const removeTag = (e) => {
    const selectedTag = e.target.parentNode.firstChild.textContent;
    setTags(tags.filter((item) => item !== selectedTag));
  };

  const handleTags = (e) => {
    // space
    if (e.keyCode === 32) {
      setTags([...tags, e.target.value.replace(' ', '')]);
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
      <button onClick={() => setIsModalVisible(!isModalVisible)}>elo</button>
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
            <Field as={StyledTextArea} placeholder="wpisz opis" id="description" name="description"></Field>
            <ErrorMessage component={StyledText} name="description"></ErrorMessage>
            <StyledTagsContainer>
              <StyledTags name="renderedTags">{renderedTags}</StyledTags>
              <StyledTagsInputBox></StyledTagsInputBox>

              <StyledTagsInput placeholder="wpisz tagi" onKeyUp={handleTags}></StyledTagsInput>
              <ErrorMessage component={StyledText} name="tags"></ErrorMessage>
            </StyledTagsContainer>

            {/* INVISIBLE */}
            <StyledInput as={Field} name="userTags" id="userTags" value={tags}></StyledInput>
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
  mapPropsToValues: ({date, time, topic, leader, meetingHref, description, userTags}) => {
    return {
      date: date || '',
      time: time || '',
      topic: topic || '',
      leader: leader || '',
      meetingHref: meetingHref || '',
      description: description || '',
      userTags: userTags || '',
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
    // fetch idzie tu
    console.log('USERTAGS', values.userTags);
    // console.log(values.userTags.join(','));
    console.log(values);
  },
})(Contact);

export default Formik;

// STYLES

const Container = styled.div`
  width: 100%;
  bottom: 5rem;
  justify-content: center;
  font-size: 1.6rem;
  margin-bottom: 5rem;
`;

const StyledWrapper = styled.div`
  width: 100%;
`;

const StyledTableActions = styled.div`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px 27px 13px;
`;

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
  align-items:center;
  justify-content: center;
  &:hover{
    cursor: pointer;
  }
}
`;
const StyledTagsInputBox = styled.div``;
