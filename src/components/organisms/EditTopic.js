import React from 'react';
import {withFormik, Form} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import {Input, Tags} from 'components/molecules/CustomFormFields';
import variables from 'settings/variables';
import styled from 'styled-components';
import {CancelButton, PrimaryButton} from 'components/atoms/Button';
import {toast} from 'react-toastify';

import {connect} from 'react-redux';
import {removeMeetings as fetchMeetsAction} from 'selectors/FetchMeets';

const Formik = ({setFieldValue, column, setIsModalVisible, selectedElement}) => {
  const [editData] = selectedElement;
  const setTags = name => tags => {
    setFieldValue(name, tags);
  };
  return (
    <StyledForm as={Form}>
      <Input name="topic" label="Temat" placeholder="Wprowadź temat"></Input>
      <Input name="userAdded" label="Inicjator" placeholder="Wpisz swoje dane"></Input>
      <Tags activeTags={editData.tags} placeholder="Wpisz kategorie tematu" onTagsChange={setTags('tags')} name="tags" label="Tagi"></Tags>

      <StyledButtonsContainer column={column}>
        <CancelButton large onClick={() => setIsModalVisible(false)} type="button">
          Anuluj
        </CancelButton>
        <PrimaryButton large>Dodaj</PrimaryButton>
      </StyledButtonsContainer>
    </StyledForm>
  );
};

const EditTopic = withFormik({
  mapPropsToValues: ({topic, votes, userAdded, tags, selectedElement}) => {
    const [editData] = selectedElement;
    return {
      topic: topic || editData.topic || '',
      votes: votes || editData.votes || 0,
      userAdded: userAdded || editData.userAdded || 'bezimienny',
      addedDate: new Date().getTime() || '',
      tags: tags || editData.tags || [],
    };
  },
  validationSchema: Yup.object().shape({
    topic: Yup.string()
      .min(3, 'Temat musi mieć minimum 3 znaki')
      .required('Wprowadź temat'),
    userAdded: Yup.string()
      .min(3, 'To pole musi mieć minimum 3 znaki')
      .required('Wprowadź informacje o użytkowniku'),
    votes: Yup.number('głosy muszą być liczbą'),
  }),
  handleSubmit: (values, {props}) => {
    props.setSubmitting(true);
    const [editData] = props.selectedElement;
    props.postMeetings(values, editData._id)
    .then(() => {
      props.setIsModalVisible(false);
      props.setSubmitting(false);
      toast.success('Pomyślnie edytowano temat!');
    })
    .catch(() => {
      props.setSubmitting(false);
      toast.error('Nie udało się edytować tematu...');
    });
  },
})(Formik);

const mapDispatchToProps = dispatch => ({
  removeMeetings: (dataToSend, id) => dispatch(fetchMeetsAction(dataToSend, id)),
});

export default connect(null, mapDispatchToProps)(EditTopic);

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