import React, {useState, useEffect} from 'react';
import {withFormik, Form, Field, ErrorMessage, useFormikContext} from 'formik';
import * as Yup from 'yup';

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
  StyledText,
  StyledTextArea,
} from 'styledComponents/ModalStyled/';

const Contact = ({errors, isSubmitting}, props) => {
  console.log('errors', errors);
  console.log('isSubmitting', isSubmitting);
  const [userTags, setUserTags] = useState(['js']);
  const [isModalVisible, setIsModalVisible] = useState(true);

  console.log(props);

  const removeTag = (e) => {
    const selectedTag = e.target.parentNode.firstChild.textContent;
    setUserTags(userTags.filter((item) => item !== selectedTag));
  };

  const handleTags = (e) => {
    // space
    if (e.keyCode === 32) {
      console.log('wcisnieto spacje');
      setUserTags([...userTags, e.target.value.replace(' ', '')]);
      e.target.value = '';
    }
    // backspace
    if (e.keyCode === 8 && e.target.value === '' && userTags.length > 0) {
      const lastItemInArray = userTags[userTags.length - 1];
      console.log('backspace');
      e.target.value = lastItemInArray;
      setUserTags(userTags.filter((item) => item !== lastItemInArray));
    }
  };

  const renderedTags = userTags.map((tag) => (
    <StyledTag key={tag + (Math.random() * 10000).toString()}>
      <StyledTagText>{tag}</StyledTagText>
      <StyledCloseButton onClick={removeTag}>&times;</StyledCloseButton>
    </StyledTag>
  ));

  const TestField = () => {
    const {values} = useFormikContext();
    useEffect(() => {
      values.tags = userTags;
    }, [values]);
    return null;
  };

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

            <TestField />

            {/* INVISIBLE */}
            <StyledInput style={{display: 'none'}} as={Field} name="tags" id="tags" value={userTags}></StyledInput>
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
      time: time || '21:30',
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
    // fetch idzie tu
    console.log(values);
    // console.log(values.userTags.join(','));
    // console.log(values);
  },
})(Contact);

export default Formik;
