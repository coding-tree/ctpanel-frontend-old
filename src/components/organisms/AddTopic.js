import React from 'react';
import {withFormik, Form} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import {Input, Tags} from 'components/molecules/CustomFormFields';
import variables from 'settings/variables';
import styled from 'styled-components';
import {CancelButton, PrimaryButton} from 'components/atoms/Button';
import {toast} from 'react-toastify';

import { useDispatch } from 'react-redux';
import { addTopic } from 'selectors/fetchTopics';

const Formik = ({setFieldValue, column, status, isModalVisible, setIsModalVisible, isSubmitting}) => {
  const setTags = name => tags => {
    setFieldValue(name, tags);
  };
  return (
    <StyledForm as={Form}>
      <Input name="topic" label="Temat" placeholder="Wprowadź temat"></Input>
      <Input name="userAdded" label="Inicjator" placeholder="Wpisz swoje dane"></Input>
      <Input name="description" label="Opis" placeholder="Wpisz opis tematu"></Input>
      <Tags shouldReset={status} placeholder="Wpisz kategorie tematu" onTagsChange={setTags('tags')} name="tags" label="Tagi"></Tags>

      <StyledButtonsContainer column={column}>
        <CancelButton large onClick={() => setIsModalVisible(!isModalVisible)} type="button">
          Anuluj
        </CancelButton>
        <PrimaryButton disabled={isSubmitting} large>
          Dodaj
        </PrimaryButton>
      </StyledButtonsContainer>
    </StyledForm>
  );
};

const AddTopicWithFormik = withFormik({
  mapPropsToValues: ({topic, description, votes, userAdded, tags}) => {
    return {
      topic: topic || '',
      description: description || 'brak opisu spotkania',
      votes: votes || 0,
      userAdded: userAdded || 'bezimienny',
      addedDate: new Date().getTime() || '',
      tags: tags || [],
    };
  },
  validationSchema: Yup.object().shape({
    topic: Yup.string()
      .min(3, 'Temat musi mieć minimum 3 znaki')
      .required('Wprowadź temat'),
    description: Yup.string(),
    userAdded: Yup.string()
      .min(3, 'To pole musi mieć minimum 3 znaki')
      .required('Wprowadź informacje o użytkowniku'),
    votes: Yup.number('głosy muszą być liczbą'),
  }),
  handleSubmit: (values, {resetForm, setStatus, props}) => {
    const {
      setSubmitting,
      addTopicAction
    } = props;

    setSubmitting(true);
    addTopicAction(values)
    .then(() => {
      setStatus(true);
      resetForm();
      props.setIsModalVisible(false);
      props.setSubmitting(false);
      toast.success('Dodano nowy temat!');
    })
    .catch(() => {
      setStatus(false);
      props.setSubmitting(false);
      toast.error('Nie udało się dodać tematu...');
    });
  },
})(Formik);

const AddTopic = (props) => {
  const dispatch = useDispatch();
  const addTopicAction = (dataToSend) => dispatch(addTopic(dataToSend));

  return (
    <AddTopicWithFormik addTopicAction={addTopicAction} {...props}/>
  );
};

export default AddTopic;


export const StyledForm = styled.form`
  font-family: inherit;
  padding: 2.3rem;
  display: grid;
  grid-template-columns: ${({column}) => (column ? `repeat(${column}, 1fr)` : 'repeat(1, 1fr)')};
  grid-column-gap: 2rem;

  textarea {
    font-family: inherit;
    font-size: 1.6rem;
    border-radius: 4px;
    border: 1px solid ${variables.borderColor};
    padding: 12px;
    color: ${variables.colorFont};
    height: 12rem;
    resize: none;
    &::placeholder {
      color: ${variables.colorLink};
    }
  }
`;

const StyledButtonsContainer = styled.div`
  justify-self: end;
  grid-column: ${({column}) => (column ? `span ${column}` : 'span 1')};
  display: grid;
  grid-column-gap: 1rem;
  grid-template-columns: ${({buttons}) => (buttons ? `repeat(${buttons}, 1fr)` : 'repeat(2, 1fr)')};
`;