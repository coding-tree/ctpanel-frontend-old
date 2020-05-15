import React, {useState, useEffect} from 'react';
import {withFormik, Form, Field, ErrorMessage, useFormikContext} from 'formik';
import * as Yup from 'yup';
import Button from 'components/atoms/Button/Button';
import Icon from 'components/atoms/Icon';
import axios from 'axios';
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

const Topic = ({errors, isSubmitting}, props) => {
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
      <Button width="144px" height="42px" primary uppercase onClick={() => setIsModalVisible(!isModalVisible)}>
        Dodaj <Icon fontSize="1.4rem" padding="0 0 0 .5rem" className="fas fa-plus"></Icon>
      </Button>
      <StyledModalContainer isModalVisible={isModalVisible}>
        <StyledBox>
          <StyledHeader>Dodaj nowy temat</StyledHeader>
          <StyledForm as={Form}>
            <StyledLabel htmlFor="topic" name="topic-label" id="topic-label">
              Temat
            </StyledLabel>
            <StyledInput placeholder="wprowadź temat" as={Field} name="topic" id="topic"></StyledInput>
            <StyledLabel htmlFor="tags">Tagi</StyledLabel>
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
  mapPropsToValues: ({topic, votes, userAdded, addedDate, tags}) => {
    return {
      topic: topic || '',
      votes: votes || 0,
      userAdded: userAdded || 'bezimienny',
      addedDate: new Date().getTime() || '',
      tags: tags || [],
    };
  },
  validationSchema: Yup.object().shape({
    topic: Yup.string('temat musi być tekstem'),
    votes: Yup.number('głosy muszą być liczbą'),
    userAdded: Yup.string('gall anonim nie może dodawać tematów').required(),
  }),
  handleSubmit: (values) => {
    // fetch idzie tu
    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/topics`, values)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
})(Topic);

export default Formik;
