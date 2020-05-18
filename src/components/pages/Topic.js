import React, {useState, useEffect} from 'react';
import {withFormik, Form, Field, ErrorMessage, useFormikContext} from 'formik';
import * as Yup from 'yup';
import Button from 'components/atoms/Button/Button';
import Icon from 'components/atoms/Icon';
import axios from 'axios';
import styled from 'styled-components';

const Topic = ({errors, isSubmitting}, props) => {
  const [userTags, setUserTags] = useState(['js']);
  const [isModalVisible, setIsModalVisible] = useState(true);

  const removeTag = (e) => {
    const selectedTag = e.target.parentNode.firstChild.textContent;
    setUserTags(userTags.filter((item) => item !== selectedTag));
  };

  const handleTags = (e) => {
    // space
    if (e.keyCode === 32) {
      setUserTags([...userTags, e.target.value.replace(' ', '')]);
      e.target.value = '';
    }
    // backspace
    if (e.keyCode === 8 && e.target.value === '' && userTags.length > 0) {
      const lastItemInArray = userTags[userTags.length - 1];
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

export const Container = styled.div`
  width: 100%;
  bottom: 5rem;
  justify-content: center;
  font-size: 1.6rem;
  margin-bottom: 5rem;
`;

export const StyledWrapper = styled.div`
  width: 100%;
`;

export const StyledTableActions = styled.div`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px 27px 13px;
`;

export const StyledModalContainer = styled.div`
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
export const StyledBox = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  width: 640px;
`;

export const StyledHeader = styled.div`
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

export const StyledText = styled.span`
  padding: 5px 15px;
  border: 1px solid red;
`;

export const StyledForm = styled.form`
  font-family: 'Muli', sans-serif;
  padding: 23px;
  display: flex;
  flex-direction: column;
`;

export const StyledInput = styled.input`
  font-family: inherit;
  width: 100%;
  border-radius: 4px;
  border: 1px solid #9d9da3;
  padding: 12px;
  color: black;
  margin-bottom: 22px;
  font-size: 16px;
`;

export const StyledTextArea = styled.textarea`
  font-family: inherit;
  border-radius: 4px;
  border: 1px solid #9d9da3;
  padding: 12px;
  color: black;
  margin-bottom: 22px;
  height: 120px;
  resize: none;
  font-size: 16px;
`;

export const StyledLabel = styled.label`
  font-family: inherit;
  font-weight: 700;
  font-size: 16px;
  margin-bottom: 5px;
  color: black;
`;

export const StyledSelectContainer = styled.div`
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
export const StyledSelect = styled.select`
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
  font-size: 16px;
`;

export const StyledOption = styled.option`
  padding: 12px;
  font-family: inherit;
  font-size: 16px;

  &:checked {
    background-color: #019740;
    color: white;
  }
`;

export const StyledButtonsContainer = styled.div`
  font-family: inherit;
  display: flex;
  justify-content: flex-end;
`;

export const StyledButton = styled.button`
  font-family: inherit;
  border: 1px solid #dbdbdb;
  padding: 10px 45px;
  border-radius: 4px;
  background: #019740
  color: white;
  font-weight: 700;
  transition: 0.25s ease-in-out;
  &:hover{
    cursor: pointer;
    background-color: white;
    border-color: #019740;
    color: black;
  }
  &:first-of-type {
    color: black;
    margin-right: 8px;
    background: none;
      &:hover{
        background-color: #E53D00;
        color: white;
        border-color: #dbdbdb;
      }
    
  }
  `;

export const StyledTagsContainer = styled.div`
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

export const StyledInputContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  column-gap: 12px;
`;

export const StyledTags = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const StyledTag = styled.li`
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

export const StyledTagText = styled.span``;

export const StyledTagsInput = styled.input`
  outline: none;
  border: none;
  padding: 12px;
  height: 100%;
  width: auto;
  display: flex;
  flex-grow: 1;
  font-size: 16px;
`;

export const StyledCloseButton = styled.span`
font-size: 16px;
  height: 100%;
  margin-left: 8px;
  display: flex;
  align-items:center;
  justify-content: center;
  transition: 0.25s;
  &:hover{
    cursor: pointer;
    color: #E53D00;
  }
}
`;
export const StyledTagsInputBox = styled.div``;
