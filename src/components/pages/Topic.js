import React, {useState, useEffect} from 'react';
import {withFormik, Field, ErrorMessage, useFormikContext} from 'formik';
import * as Yup from 'yup';

import axios from 'axios';
import styled from 'styled-components';
import Modal from 'components/organisms/Modal';
import {Input} from 'components/molecules/CustomFormFields';

const Topic = () => {
  const [userTags, setUserTags] = useState(['js']);

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

  return (
    <Modal title="Dodaj nowy temat">
      <Input name="topic" label="Temat" placeholder="Wprowadź temat"></Input>
      <Input name="userAdded" label="Inicjator" placeholder="Wpisz swoje dane"></Input>

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
    </Modal>
  );
};

const Formik = withFormik({
  mapPropsToValues: ({topic, votes, userAdded, tags}) => {
    return {
      topic: topic || '',
      votes: votes || 0,
      userAdded: userAdded || 'bezimienny',
      addedDate: new Date().getTime() || '',
      tags: tags || [],
    };
  },
  validationSchema: Yup.object().shape({
    topic: Yup.string().min(3, 'Temat musi mieć minimum 3 znaki').required('Wprowadź temat'),
    userAdded: Yup.string().min(3, 'To pole musi mieć minimum 3 znaki').required('Wprowadź informacje o użytkowniku'),
    votes: Yup.number('głosy muszą być liczbą'),
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

const StyledText = styled.span`
  padding: 5px 15px;
  border: 1px solid red;
`;

const StyledInput = styled.input`
  font-family: inherit;
  width: 100%;
  border-radius: 4px;
  border: 1px solid #9d9da3;
  padding: 12px;
  color: black;
  margin-bottom: 22px;
  font-size: 16px;
`;

const StyledLabel = styled.label`
  font-family: inherit;
  font-weight: 700;
  font-size: 16px;
  margin-bottom: 5px;
  color: black;
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
  font-size: 16px;
`;

const StyledCloseButton = styled.span`
  font-size: 16px;
  height: 100%;
  margin-left: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.25s;
  &:hover {
    cursor: pointer;
    color: #e53d00;
  }
`;
const StyledTagsInputBox = styled.div``;
