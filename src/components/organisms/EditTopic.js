import React from 'react';
import {withFormik, Form} from 'formik';
import * as Yup from 'yup';
import {Input, Tags} from 'components/molecules/CustomFormFields';
import styled from 'styled-components';
import {CancelButton, PrimaryButton} from 'components/atoms/Button';
import {toast} from 'react-toastify';
import {useDispatch} from 'react-redux';
import {editTopic} from 'selectors/fetchTopics';

const Formik = ({setFieldValue, column, setIsModalVisible, selectedElement}) => {
  const [editData] = selectedElement;
  const setTags = (name) => (tags) => {
    setFieldValue(name, tags);
  };
  return (
    <StyledForm as={Form}>
      <Input name="topic" label="Temat" placeholder="Wprowadź temat"></Input>
      <Input name="userAdded" label="Inicjator" placeholder="Wpisz swoje dane"></Input>
      <Input name="description" label="Opis" placeholder="Wpisz opis"></Input>
      <Tags activeTags={editData.tags} placeholder="Wpisz kategorie tematu" onTagsChange={setTags('tags')} name="tags" label="Tagi"></Tags>

      <StyledButtonsContainer column={column}>
        <CancelButton large onClick={() => setIsModalVisible(false)} type="button">
          Anuluj
        </CancelButton>
        <PrimaryButton large>Zapisz</PrimaryButton>
      </StyledButtonsContainer>
    </StyledForm>
  );
};

const EditTopicWithFormik = withFormik({
  mapPropsToValues: ({topic, description, votes, userAdded, tags, selectedElement}) => {
    const [editData] = selectedElement;
    return {
      topic: topic || editData.topic || '',
      votes: votes || editData.votes || 0,
      userAdded: userAdded || editData.userAdded || 'bezimienny',
      addedDate: new Date().getTime() || '',
      tags: tags || editData.tags || [],
      description: description || editData.description || 'brak opisu',
    };
  },
  validationSchema: Yup.object().shape({
    topic: Yup.string().min(3, 'Temat musi mieć minimum 3 znaki').required('Wprowadź temat'),
    userAdded: Yup.string().min(3, 'To pole musi mieć minimum 3 znaki').required('Wprowadź informacje o użytkowniku'),
    votes: Yup.number('głosy muszą być liczbą'),
    description: Yup.string(),
  }),
  handleSubmit: (values, {props}) => {
    const {setSubmitting, editTopicAction, setIsModalVisible, selectedElement, toggleSelection} = props;
    const [editData] = selectedElement;
    setSubmitting(true);

    editTopicAction(values, editData._id)
      .then(() => {
        setIsModalVisible(false);
        setSubmitting(false);
        toggleSelection([]);
        toast.success('Pomyślnie edytowano temat!');
      })
      .catch(() => {
        setSubmitting(false);
        toast.error('Nie udało się edytować tematu...');
      });
  },
})(Formik);

const EditTopic = (props) => {
  const dispatch = useDispatch();
  const editTopicAction = (dataToSend, id) => dispatch(editTopic(dataToSend, id));

  return <EditTopicWithFormik editTopicAction={editTopicAction} {...props} />;
};

export default EditTopic;

export const StyledForm = styled.form`
  font-family: inherit;
  padding: 2.3rem;
  display: grid;
  grid-template-columns: ${({column}) => (column ? `repeat(${column}, 1fr)` : 'repeat(1, 1fr)')};
  grid-column-gap: 2rem;
`;

const StyledButtonsContainer = styled.div`
  justify-self: end;
  grid-column: ${({column}) => (column ? `span ${column}` : 'span 1')};
  display: grid;
  grid-column-gap: 1rem;
  grid-template-columns: ${({buttons}) => (buttons ? `repeat(${buttons}, 1fr)` : 'repeat(2, 1fr)')};
`;
